import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useCart ,useAuth} from "@saleor/sdk";
import { first } from 'lodash';
import {useRouter} from 'next/router';

export default function Home() {
  const {locale} = useRouter();
const {items}= useCart();
const { authenticated}=useAuth();
console.log({authenticated});
  return (
   
    <div>{locale}</div>
      
  );
}
