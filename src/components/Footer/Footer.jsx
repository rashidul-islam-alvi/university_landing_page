import React from "react";

const Footer = () => {
  const pstyle = "text-[12px] mb-5";
  const divStyle = "flex flex-col flex-1 p-5";
  const h2Style = "mb-5 text-lg font-semibold";
  return (
    <div className="px-5 lg:px-[250px] text-white bg-[#1C2331] flex lg:flex-row flex-col">
      <div className={divStyle}>
        <h2 className={h2Style}>CONTACT</h2>
        <p className={pstyle}>
          111/2 Kawlar Jame Mosjid Road, Ashkona, (Near Hajj Camp) Dakshinkhan,
          Dhaka-1230
        </p>
        <p className={pstyle}>info@nub.ac.bd</p>
        <p className={pstyle}>
          9821493-7, & 9898521, Ext- 400, Ext- 401, Ext- 402
        </p>
        <p className={pstyle}>
          01755514661, 01755514650, 01755514651, 01755514652, 01755514657
        </p>
      </div>
      <div className={divStyle}>
        <h2 className={h2Style}>QUICK LINKS</h2>
        <p className={pstyle}>Nub Forms</p>
        <p className={pstyle}>Research</p>
        <p className={pstyle}>Job Opening</p>
        <p className={pstyle}>Office Mail</p>
      </div>
      <div className={divStyle}>
        <h2 className={h2Style}>OTHER LINKS</h2>
        <p className={pstyle}>Newspaper Article</p>
        <p className={pstyle}>Seminar Paprers</p>
        <p className={pstyle}>Journal</p>
        <p className={pstyle}>Newsletter</p>
      </div>
      <div className={divStyle}>
        <h2 className={h2Style}>ADMINISTRATION</h2>
        <p className={pstyle}>Administrative Staffs</p>
        <p className={pstyle}>IT Department</p>
        <p className={pstyle}>NUB Backoffice ERP</p>
        <p className={pstyle}>NUB Academic ERP</p>
      </div>
      <div className={divStyle}>
        <h2 className={h2Style}>IMPORTANT LINKS</h2>
        <p className={pstyle}>Online Admission</p>
        <p className={pstyle}>Alumni Association</p>
        <p className={pstyle}>Photo Gallery</p>
        <p className={pstyle}>PhD Research</p>
      </div>
    </div>
  );
};

export default Footer;
