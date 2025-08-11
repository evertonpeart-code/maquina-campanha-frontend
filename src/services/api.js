import axios from 'axios';

// Cria a instância do axios com baseURL e timeout
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 20000, // 20 segundos timeout
});

// Interceptor de requisição para incluir token se tiver (exemplo)
api.interceptors.request.use(
  (config) => {
    // Exemplo: incluir token JWT se precisar
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    if (import.meta.env.DEV) {
      console.log('[API] Request:', config.method.toUpperCase(), config.url, config.data || '');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor de resposta para lidar com erros globais
api.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.log('[API] Response:', response.status, response.config.url, response.data);
    }
    return response;
  },
  (error) => {
    if (import.meta.env.DEV) {
      console.error('[API] Error:', error.config?.url, error.message);
    }

    // Customize mensagens de erro para o usuário final
    if (error.response) {
      // Erro retornado pelo servidor
      const status = error.response.status;
      switch (status) {
        case 400:
          error.message = 'Requisição inválida.';
          break;
        case 401:
          error.message = 'Não autorizado. Faça login novamente.';
          // Aqui pode disparar logout automático, ex: store.dispatch(logout())
          break;
        case 403:
          error.message = 'Acesso negado.';
          break;
        case 404:
          error.message = 'Recurso não encontrado.';
          break;
        case 500:
          error.message = 'Erro interno do servidor. Tente novamente mais tarde.';
          break;
        default:
          error.message = `Erro inesperado (${status}).`;
      }
    } else if (error.code === 'ECONNABORTED') {
      // Timeout
      error.message = 'Tempo de requisição excedido. Verifique sua conexão.';
    } else if (!error.response) {
      // Sem resposta do servidor
      error.message = 'Servidor indisponível. Tente novamente mais tarde.';
    }

    return Promise.reject(error);
  }
);

export default api;
