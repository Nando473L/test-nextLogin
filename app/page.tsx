import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Image from "next/image"
import Counter from "@/components/Counter"
import Login from "@/components/Login"
import IndexPage from "@/components/IndexPage"

export default function Home() {
  return (
    <>
      {/*}<Head>
        <title>Mi Página web</title>
        <meta httpEquiv="Context-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>{*/}
      
      {/*<Menu/>
      <div className={styles.content}>
        <h1>Fernando Cruz León</h1>
   

        
      </div>
   
      

    <Footer/>
      <Counter/>
      <Login/>*/}
      <IndexPage/>
    </>
  )
}
