import styles from "./Home.module.css"



function Homegrid({homeDataArr}){
  

    return (
        <div>
        
        <div className={styles.homegridDiv}>
     {homeDataArr && homeDataArr.map((el,i)=>{
        return <img  className={styles.gridImage} src={el.largeImageURL} alt="" />
       
     })}
         </div>

        

      </div>
    )
}
export default Homegrid