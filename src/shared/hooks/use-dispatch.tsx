import { useDispatch } from 'react-redux';
import {TypeDispatch} from "@/app/providers/store";

export const useTypeDispatch = () => useDispatch<TypeDispatch>();
