import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  // Carrega o token do AsyncStorage e valida o usuário ao abrir o app
  useEffect(() => {
    async function loadStorage() {
      const storageToken = await AsyncStorage.getItem("@finToken");

      if (storageToken) {
        try {
          // Faz uma requisição para validar o token e obter os dados do usuário
          const response = await api.get("/me", {
            headers: {
              Authorization: `Bearer ${storageToken}`,
            },
          });

          api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;
          setUser(response.data); // Configura o estado do usuário
        } catch (error) {
          console.log("Erro ao validar o token armazenado:", error);
          setUser(null); // Remove o usuário em caso de falha
        }
      }
      setLoading(false); // Indica que o carregamento inicial terminou
    }

    loadStorage();
  }, []);

  // Função para cadastrar um novo usuário
  async function signUp(email, password, nome) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/users", {
        name: nome,
        password: password,
        email: email,
      });
      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log("Erro ao cadastrar:", err);
      alert("Erro: " + err);
      setLoadingAuth(false);
    }
  }

  // Função para fazer login
  async function signIn(email, password) {
    setLoadingAuth(true);

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { id, name, token } = response.data;

      // Salva o token no AsyncStorage
      await AsyncStorage.setItem("@finToken", token);

      // Configura o cabeçalho de autorização para futuras requisições
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      // Atualiza o estado do usuário
      setUser({
        id,
        name,
        email,
      });
      setLoadingAuth(false);
    } catch (err) {
      console.log("Erro ao logar:", err);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear()
    .then( ()=>{
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        loadingAuth,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
