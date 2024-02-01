import AuthWrapper from "@/features/auth/presenter/components/AuthWrapper"
import LoginPage from "@/features/auth/presenter/pages/Login"

function Login() {
  return (
    <AuthWrapper>
      <LoginPage />
    </AuthWrapper>
  )
}

export default Login
