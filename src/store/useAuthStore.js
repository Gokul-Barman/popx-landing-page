
import { create } from "zustand"
import { persist } from "zustand/middleware"


export const useAuthStore = create(
    persist(
        (set,get) => ({
            user: null,
            registeredUser: null,

            signup: (userData) => {
                set({
                    registeredUser: userData,
                    user: userData
                });
            },

            login: (email, password) => {
                const {registeredUser} = get();

                if(registeredUser && registeredUser.email == email && registeredUser.password == password) {
                    set({user: registeredUser});
                    return {success: true};
                }
                return {success: false, message: "Invalid Email or Password"};
            },

            logout: () => set({user: null}),
        }),
        {name: 'popx-auth-storage',}
    )
);