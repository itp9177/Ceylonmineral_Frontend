import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useCart ,useAuth} from "@saleor/sdk";
import { first } from 'lodash';
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  let {t} = useTranslation();
const {items}= useCart();
const { authenticated}=useAuth();
console.log({authenticated});
  return (
   
    <div>{t('common:hello')}</div>
      
  );
}
