import React from 'react';
import MtlLogo from '../../../components/common/logo';

const GoogOAuth = ({ onGoogleSignIn }) => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="flex flex-col items-center justify-center text-center lg:text-left">
                            <h1 class="text-5xl font-bold">
                                <MtlLogo fontSize="text-2xl" />
                            </h1>
                            <p class="py-6 font-RobotoSlab">A product-focused javascript fullstack developer based in Bangalore. I specialise in creating interactive experiences and functional interfaces using React, Canvas, Atomic Architecture and Design Systems. <span className="font-bold">This is an admin gateway for my blogger & youtube posts.</span></p>
                        </div>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="h-fit w-full">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" class="input input-bordered" />
                                    <label class="label">
                                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                            </div>
                            <div class="divider">OR</div>
                            <div class="h-fit w-full">
                                <button onClick={onGoogleSignIn} className="w-full">
                                    <div className="flex text-white bg-[#4285f4] border-r-2 shadow-xl relative w-full h-[46px] rounded">
                                        <div className="m-1 bg-white w-[40px] h-[40px]">
                                            <img className="absolute mt-2 ml-2 w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                        </div>
                                        <p className="text-center align-middle p-2"><b>Sign in with google</b></p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogOAuth;