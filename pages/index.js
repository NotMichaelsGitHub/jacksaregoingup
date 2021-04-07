import Layout from '../components/Layout'
import Arewe from '../components/Arewe'
import Standings from '../components/Standings'
// import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div>
    
      <Layout >

        {/* <div className={styles.main}>
          <Arewe /> 
          <Table />
        </div> */}

        <Arewe /> 
        <Standings />

      </Layout>

    </div>
  )
}
