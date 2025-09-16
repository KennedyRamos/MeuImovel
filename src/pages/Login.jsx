export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form className="flex flex-col text-center gap-4">
        <h1 className="font-mono text-4xl text-indigo-950 font-semibold">Meu Imóvel</h1>

        <h2 className="text-4xl text-indigo-950 font-semibold">Entrar</h2>

        <input type="email" name="email" id="email" placeholder="Email" className="p-2 bg-gray-100 rounded-md"/>

        <input type="password" name="password" id="password" placeholder="Senha" className="p-2 bg-gray-100 rounded-md"/>

        <button type="submit" className="py-2 bg-blue-400 text-white text-xl rounded-md">Acessar</button>
        
        <a href="#" className="text-blue-400">Esqueceu a senha?</a>

        <p>Ainda não tem conta? <a href="#" className="text-blue-400 font-bold">Cadastre-se</a></p>
      </form>
    </div>
  )
}