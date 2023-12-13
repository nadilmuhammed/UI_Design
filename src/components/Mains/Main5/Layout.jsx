import React from "react";

function Layout({data}) {

  const { p1,p2,p3,image } =data;

  return (
    <>
      <div className="" style={{border: "none",width: "45%",height: "65vh",padding: "2rem",background: "#eff1f5",borderRadius: "10px",}}>
        <card>
          <div>
            <p style={{ fontSize: "2rem" }}>
              {p1} </p>
              <p style={{fontSize: "2rem"}}>{p2}
            </p>
            <p style={{ marginTop: "1rem" }}>
              {p3}
            </p>
            <div>
              <img
                style={{ width: "80%", padding: "2rem" }}
                src={image}
                alt="no imgae"
              />
            </div>
            <a href="#">free trial</a>
          </div>
        </card>
      </div>
    </>
  );
}

export default Layout;
