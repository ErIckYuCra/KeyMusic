
import { useContext } from 'react'
import { ContextToken } from '../context/ContextToken'

export function useToken(){
    return useContext(ContextToken)
    
} 

