import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "src/api/axiosInstance";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Loader2 } from "lucide-react";

function Signup(){
    const[roles,setRoles]=useState([]);
    const[loading,setLoading]=useState(false);
    const history=useHistory();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState:{errors,isValid}
    }=useForm({
        defaultValues:{
            role_id:'3',
        },mode:'all',
    });
    const selectedRoleId=watch('role_id');
    const password=watch("password");
    useEffect(()=>{
        axiosInstance.get('/roles').then((res)=>{
            setRoles(res.data);
            const customerRole=res.data.find((role)=>role.code==='customer');
            if(customerRole) setValue('role_id',customerRole.id.toString());
        }).catch((err)=>console.error('Roller yüklenemedi',err));
    },[setValue]);
    const storeRoleId=roles.find((r)=>r.code==='store')?.id.toString();
    const onSubmit=(data)=>{
        setLoading(true);
        let payload={
            name:data.name,
            email:data.email,
            password:data.password,
            role_id:data.role_id,
        };
        if(data.role_id===storeRoleId){
            payload.store={
                name:data.store_name,
                phone:data.store_phone,
                tax_no:data.store_tax_no,
                back_account:data.store_bank_account,
            };
        }
        axiosInstance.post('/signup',payload)
        .then(()=>{
            toast.success('You need to click link in email to activate your account!');
            history.goBack();
        })
        .catch((err)=>{
            toast.error(err.response?.data?.message ||'Bir hata oluştu.')
        })
        .finally(()=> setLoading(false));
    }

    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Create New Account</h2>
                <form>
                    <div>
                        <label className="form-label">Name: *</label>
                        <input
                        {...register('name',{required:'Name is required',minLength:{value:3,message:'Min 3 chars'}})}
                        className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                        placeholder="Adınız" 
                        />
                        {errors.name && <p className="form-error-msg">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="form-label">Email: *</label>
                        <input
                        type="email"
                        {...register('email',{
                            required:'Email is required',
                            pattern:{ value: /^\S+@\S+$/i, message: 'Invalid email' } 
                        })}
                        className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                         placeholder="Email" 
                        />
                         {errors.email && <p className="form-error-msg">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="form-label">Password:</label>
                        <input
                        type="password"
                        {...register('password',{
                            required:'Password is required',
                            minLength:{value:8,message:'Min 8 characters'},
                            validate:(v)=>(/[a-z]/.test(v) && /[A-Z]/.test(v) && /[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v)) ||
                             "Must include uppercase, lowercase, number and special char"       
                        })}
                        className={`form-input ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && <p className="form-error-msg">{errors.password.message}</p>}
                    </div>
                    <div>
                        <label className="form-label">Confirm Password</label>
                        <input
                        type="password"
                        {...register('confirmPassword',{
                            validate:(v)=> v===password || "Passwords do not match"
                        })}
                         className={`form-input ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.confirmPassword && <p className="form-error-msg">{errors.confirmPassword.message}</p>}   
                    </div>
                    <div>
                        <label className="form-label">Role</label>
                        <select
                        {...register('role_id')}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                           {roles.map((role)=>(
                            <option key={role.id} value={role.id}>{role.name}</option>
                           ))}
                        </select>
                    </div>
                    {selectedRoleId===storeRoleId && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200 animate-in fade-in duration-500">
                             <h3 className="text-blue-800 font-semibold mb-2 text-sm">Store Information</h3>
                             <label className="form-label">Store Name *</label>
                             <input
                                {...register('store_name',{required:'Required',minLength:3})}
                                className="form-input"    
                             />
                             <label className="form-label">Store Phone *</label>
                             <input
                                placeholder="05XXXXXXXXX"
                                {...register('store_phone',{
                                    required:'Required',
                                    pattern:{value: /^(\+90|0)?5\d{9}$/, message: 'Invalid Turkish phone' }
                                })  }
                                className="form-input"
                             />
                             <label className="form-label">Store Tax ID *</label>
                             <input
                                placeholder="TXXXXVXXXXXX"
                                {...register('store_tax_no',{
                                    required:'Required',
                                    pattern:{value:/^T\d{4}V\d{6}$/, message: 'Format: TXXXXVXXXXXX' }
                                })}
                                className="form-input"
                             />
                             <label className="form-label">Store Bank Account (IBAN) *</label>
                             <input
                                placeholder="TR..."
                                {...register('store_bank_account',{
                                    required:'Required',
                                    pattern:{value:/^[A-Z0-9]{26}$/, message: 'Invalid IBAN'}
                                })}
                                className="form-input"
                             />
                        </div>      
                    )}
                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={loading || !isValid}
                            className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium
                                ${loading || !isValid ? 'bg-gray-400 cursor-not-allowed': 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'} transition-colors duration-200 `}
                        >
                            {
                                loading ?(
                                    <>
                                        <Loader2 className="animate-spin mr-2" size={20}/>
                                        Processing...
                                    </>
                                ): (
                                    'Sign Up'
                                )
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Signup;