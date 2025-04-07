import React, { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from '../apiServices/LoginApi';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutationLogin = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            console.log("Inside onSuccess");
            console.log("Login success data:", data);
            localStorage.setItem("Token", data.accessToken);
            localStorage.setItem("Username", username);
            queryClient.invalidateQueries(["user"]);
            alert("Login Successful!");
            navigate("/dashboard");
        },
        onError: (error) => {
            console.error("Login failed:", error);
            alert("Login failed!");
        }
    });

    const handleLogin = (event) => {
        event.preventDefault();
        mutationLogin.mutate({ username, password });
        console.log(username, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 square-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login to Your Account</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-2">Email</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-2 border square-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border square-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 square-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
