import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';
import { logout } from '../lib/api';

const useLogout = () => {
    const queryClient = useQueryClient()
     const{mutate:logoutMutation, isPending, error} = useMutation({
    mutationFn: logout,
    onSuccess: () => {
        toast.success("Logged out successfully!") ;
        queryClient.invalidateQueries({queryKey: ['authUser']})
    }
  })

  return {logoutMutation, isPending, error}
}

export default useLogout