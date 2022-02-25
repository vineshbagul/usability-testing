// import "./log.css"

const Logs =(props) => {
  let { logsValue , deletelog } = props;

   return logsValue.map((log) =>{
    return (
        <span onClick={()=>deletelog(log.id)} className="loginfo" key={log.id}>
            <p>{log.value}</p>
        </span>
    )
   })
   
    
};

export default Logs;