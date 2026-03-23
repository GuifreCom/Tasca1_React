function Component({imatge, titol, textp, textb1, enllaç1, textb2, enllaç2}) {

  return (
    <div style={{
        borderRadius:"20px",
        width:"340px",
        height:"700px",
        display:"flex",
        flexDirection:"column",
        padding:"10px",
        backgroundColor:"#2e2e2b"
    }}>
        <img src={imatge} style={{borderRadius:"20px"}}/>
        <h2>{titol}</h2>
        <p>{textp}</p>
        <div>
            <button  onClick={() => window.open(enllaç1)} style={{
              backgroundColor:"#2e2e2b",
              color:"#2179d0"
              }}>{textb1}</button>
            <button  onClick={() => window.open(enllaç2)} style={{
              backgroundColor:"#2e2e2b",
              color:"#2179d0"
              }}>{textb2}</button>
        </div>

    </div>

  );

}
export default Component