import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { login } from '@/Redux Toolkit/features/Auth/authThunk';
import { startShift } from '@/Redux Toolkit/features/ShiftReport/ShiftRepoerThunk';
import { getUserProfile } from '@/Redux Toolkit/features/User/userThunk';
import { ShoppingCart } from 'lucide-react';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';


const Login = () => {
  const [forgotPasswwordEmail, setForgotPasswordEmail] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {branch}=useState(state=>state.branch)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [showForgotPassword, setShowForgetPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log("login...", formData);
    const resultAction = await dispatch(login(formData))
    if (login.fulfilled.match(resultAction)) {
      toast("Login Successfully!");
      const user = resultAction.payload.user
      console.log("user", user)
      dispatch(getUserProfile(resultAction.payload.jwt))
      const userRole = user.role;
      if (userRole == "ROLE_BRANCH_CASHIER") {
        navigate("/cashier")
        dispatch(startShift(user?.branchId))

      }

      else if (userRole == "ROLE_STORE_MANAGER" ||
        userRole == "ROLE_STORE_ADMIN") {
        navigate("/store")

      }
      else if (userRole == "ROLE_BRANCH_MANAGER"
      ) {
        navigate("/branch")

      }
      else if (userRole == "ROLE_ADMIN") {
        navigate("/super-admin")

      }

      console.log("user", user)
    }
  };
  const handleInputChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("forgot password email", forgotPasswwordEmail)
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 
    flex items-center justify-center p-4 relative'>

      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center space-x-2 mb-4'>


            <div className='w-10 h-10 bg-primary rounded-lg flex items-center
            justify-center'>
              <ShoppingCart className='w-6 h-6
              text-primary-foreground'/>


            </div>
            <span className='text-2xl font-bold text-foreground'>Shop Pos</span>


          </div>

          <h1 className='text-2xl font-bold text-foreground'>
            {showForgotPassword ? "Reset Password" : "Welcome Back"}
          </h1>

          <p className='text-muted-foreground mt-2'>
            {showForgotPassword ? "Enter your email to recive reset instructions"
              : "Sign in to ypur account to continue"}
          </p>

        </div>

        {
          !showForgotPassword && (
            <div className='bg-card rounded-2xl
          shadow-xl p-8'>
              <form className='space-y-5' onSubmit={handleLogin}>
                <div className='space-y-3'>
                  <Label>Email Address </Label>
                  <Input onChange={handleInputChange}
                    placeholder="Enter your email.."
                    type="email" id="email" name="email"
                    value={formData.email} />
                </div>

                <div className='space-y-3'>
                  <Label>Password </Label>
                  <Input onChange={handleInputChange}
                    placeholder="Enter your password.."
                    type="password" id="password" name="password"
                    value={formData.password} />
                </div>

                <div className='flex items-center justify-between'>

                  <div className='flex items-center gap-3'>

                    <Checkbox name="remember-me"
                      type={"checkbox"}
                      className={"h-4 w-4 text-primary focus:ring-primary border-gray-300 "} />
                    <Label>Remember me</Label>

                  </div>
                  <div>
                    <Button onClick={() => setShowForgetPassword(true)} variant={"ghost"}>Forgot Password?  </Button>
                  </div>

                </div>


                <div>
                  <Button className="py-4 w-full" type="submit">
                    Login
                  </Button>
                </div>

              </form>

              <Separator />

              <div className='mt-6 p-4 bg-muted rounded-lg'>
                <p className='text-sm text-muted-foreground text-center'>

                  <strong>Demo Account:</strong> <br />
                  Email:raan@gmail.com<br />
                  Password:12345678

                </p>
              </div>

            </div>
          )}
        {showForgotPassword && <div className='bg-card rounded-2xl shadow-xl p-8'>

          <form className='space-y-5' onSubmit={handleForgotPassword}>
            <div className='space-y-3'>
              <Label>Email Address </Label>
              <Input onChange={(e) => setForgotPasswordEmail(e.target.value)}
                placeholder="Enter your email.."
                type="email"
                id="email"
                name="forgotEmail"
                value={handleForgotPassword} />
            </div>





            <div className='flex items-center justify-between'>
              <Button variant={"outline"} onClick={() => setShowForgetPassword(false)}
                className="py-4 " >
                Back to login
              </Button>
              <Button className="py-4 " type="submit">
                Send Reset Link
              </Button>
            </div>

          </form>


        </div>}


      </div>

    </div>
  );
};

export default Login;