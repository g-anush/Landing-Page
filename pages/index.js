import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const Cover = () => {
  const [groupDropdownAnchorEl, setGroupDropdownAnchorEl] = useState(null);
  const [groupDropdown1AnchorEl, setGroupDropdown1AnchorEl] = useState(null);
  const [groupDropdown2AnchorEl, setGroupDropdown2AnchorEl] = useState(null);
  const [groupDropdown3AnchorEl, setGroupDropdown3AnchorEl] = useState(null);
  const [groupDropdown4AnchorEl, setGroupDropdown4AnchorEl] = useState(null);
  const groupDropdownOpen = Boolean(groupDropdownAnchorEl);
  const handleGroupDropdownClick = (event) => {
    setGroupDropdownAnchorEl(event.currentTarget);
  };
  const handleGroupDropdownClose = () => {
    setGroupDropdownAnchorEl(null);
  };
  const groupDropdown1Open = Boolean(groupDropdown1AnchorEl);
  const handleGroupDropdown1Click = (event) => {
    setGroupDropdown1AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown1Close = () => {
    setGroupDropdown1AnchorEl(null);
  };
  const groupDropdown2Open = Boolean(groupDropdown2AnchorEl);
  const handleGroupDropdown2Click = (event) => {
    setGroupDropdown2AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown2Close = () => {
    setGroupDropdown2AnchorEl(null);
  };
  const groupDropdown3Open = Boolean(groupDropdown3AnchorEl);
  const handleGroupDropdown3Click = (event) => {
    setGroupDropdown3AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown3Close = () => {
    setGroupDropdown3AnchorEl(null);
  };
  const groupDropdown4Open = Boolean(groupDropdown4AnchorEl);
  const handleGroupDropdown4Click = (event) => {
    setGroupDropdown4AnchorEl(event.currentTarget);
  };
  const handleGroupDropdown4Close = () => {
    setGroupDropdown4AnchorEl(null);
  };
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-[34.2px] text-gray-100 font-rubik">
      <main className="absolute top-[-997px] left-[-390px] w-[3020.7px] h-[3094.2px]">
        <section className="absolute top-[1263.3px] left-[0px] bg-deepskyblue [filter:blur(250px)] w-[2360.7px] h-[700.3px] [transform:_rotate(-32.35deg)] [transform-origin:0_0]" />
        <section className="absolute top-[1948.3px] left-[89.1px] bg-aliceblue [filter:blur(250px)] w-[2360.7px] h-[700.3px] [transform:_rotate(-32.35deg)] [transform-origin:0_0]" />
        <section className="absolute top-[2502.6px] left-[651.6px] bg-tomato-200 [filter:blur(250px)] w-[2360.7px] h-[700.3px] [transform:_rotate(-32.35deg)] [transform-origin:0_0]" />
      </main>
      <header className="absolute top-[-440px] left-[818.1px] w-[1041.9px] h-[2938.8px] text-left text-8xs-5 text-dimgray font-rubik">
        <div className="absolute top-[0px] left-[635.9px] w-[406px] h-[1460.2px]">
          <div className="absolute top-[0px] left-[0.4px] bg-gray-400 w-[405.2px] h-[1460.2px] overflow-hidden">
            <div className="absolute top-[0px] left-[0.2px] rounded-2xl bg-white w-[405px] h-[1460.2px]" />
            <div className="absolute top-[803.4px] left-[0.5px] [background:linear-gradient(180deg,_#f8f8f8,_rgba(248,_248,_248,_0))] w-[768.1px] h-[1111.1px]" />
            <img
              className="absolute top-[1301.7px] left-[0px] w-[405.2px] h-[158.5px] object-cover"
              alt=""
              src="/rectangle-260@2x.png"
            />
            <div className="absolute top-[1273.6px] left-[51.1px] rounded-[2.81px] bg-gray-200 [filter:blur(32.08px)] w-[303.1px] h-[70.4px] opacity-[0.06]" />
            <div className="absolute top-[1352.3px] left-[42.2px] w-[41.9px] h-[10.2px] text-7xs-6 text-gray-100">
              <div className="absolute top-[1.7px] left-[12.7px] inline-block w-[29.3px] h-[6.8px]">
                <span className="font-medium">Lasles</span>
                <b>VPN</b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[9.8px] h-[10.2px] object-cover"
                alt=""
                src="/standard-collection-27@2x.png"
              />
            </div>
            <div className="absolute top-[319.3px] left-[242.6px] leading-[8.44px] inline-block w-[120.4px] h-[16.9px]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            <div className="absolute top-[466.2px] left-[124.5px] leading-[8.44px] text-center inline-block w-[156.2px] h-[16.9px]">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </div>
            <div className="absolute top-[789.8px] left-[124.5px] leading-[8.44px] text-center inline-block w-[156.2px] h-[16.9px]">
              <span>{`See `}</span>
              <span className="font-medium">LaslesVPN</span>
              <span>
                {" "}
                everywhere to make it easier for you when you move locations.
              </span>
            </div>
            <div className="absolute top-[341.8px] left-[252.2px] text-9xs-9 leading-[8.44px] inline-block w-[50.4px] h-[8.4px]">
              Powerfull online protection.
            </div>
            <div className="absolute top-[354.4px] left-[252.2px] text-9xs-9 leading-[8.44px] inline-block w-[45.9px] h-[8.4px]">
              Internet without borders.
            </div>
            <div className="absolute top-[367.1px] left-[252.2px] text-9xs-9 leading-[8.44px] inline-block w-[34.6px] h-[8.4px]">
              Supercharged VPN
            </div>
            <div className="absolute top-[379.8px] left-[252.2px] text-9xs-9 leading-[8.44px] inline-block w-[40.8px] h-[8.4px]">
              No specific time limits.
            </div>
            <div className="absolute top-[285.5px] left-[242.6px] text-3xs-8 leading-[14.07px] font-medium text-gray-100 inline-block w-[107.9px] h-[28.1px]">
              We Provide Many Features You Can Use
            </div>
            <div className="absolute top-[446.5px] left-[148.7px] text-3xs-8 leading-[14.07px] font-medium text-gray-100 text-center inline-block w-[107.9px] h-[14.1px]">
              Choose Your Plan
            </div>
            <div className="absolute top-[756px] left-[148.7px] text-3xs-8 leading-[14.07px] font-medium text-gray-100 text-center inline-block w-[107.9px] h-[28.1px]">
              Huge Global Network of Fast VPN
            </div>
            <img
              className="absolute top-[342.6px] left-[242.6px] w-[6.8px] h-[6.8px]"
              alt=""
              src="/group-1120.svg"
            />
            <img
              className="absolute top-[355.3px] left-[242.6px] w-[6.8px] h-[6.8px]"
              alt=""
              src="/group-1121.svg"
            />
            <img
              className="absolute top-[367.9px] left-[242.6px] w-[6.8px] h-[6.8px]"
              alt=""
              src="/group-1122.svg"
            />
            <img
              className="absolute top-[380.6px] left-[242.6px] w-[6.8px] h-[6.8px] overflow-hidden"
              alt=""
              src="/bxbxscheckcircle.svg"
            />
            <textarea className="bg-white [outline:none] absolute top-[499.9px] left-[263.1px] rounded-[2.81px] box-border w-[92.9px] h-[213.9px] border-[0.6px] border-solid border-tomato-100" />
            <div className="absolute top-[577.3px] left-[292.5px] text-7xs-1 leading-[8.44px] font-medium text-gray-100 text-center inline-block w-[34px] h-[8.4px]">
              Premium Plan
            </div>
            <div className="absolute top-[673px] left-[294.9px] text-6xs leading-[8.44px] text-center inline-block w-[29.3px] h-[8.4px] text-gray-100">
              <span className="font-medium">{`$12 `}</span>
              <span className="text-dimgray">/ mo</span>
            </div>
            <textarea className="bg-white [outline:none] absolute top-[499.9px] left-[156.2px] rounded-[2.81px] box-border w-[92.9px] h-[213.9px] border-[0.6px] border-solid border-gainsboro-200" />
            <div className="absolute top-[577.3px] left-[185.3px] text-7xs-1 leading-[8.44px] font-medium text-gray-100 text-center inline-block w-[34.6px] h-[8.4px]">
              Standard Plan
            </div>
            <div className="absolute top-[673px] left-[189.7px] text-6xs leading-[8.44px] text-center inline-block w-[25.9px] h-[8.4px] text-gray-100">
              <span className="font-medium">{`$9 `}</span>
              <span className="text-dimgray">/ mo</span>
            </div>
            <textarea className="bg-white [outline:none] absolute top-[499.9px] left-[49.2px] rounded-[2.81px] box-border w-[92.9px] h-[213.9px] border-[0.6px] border-solid border-gainsboro-200" />
            <div className="absolute top-[577.3px] left-[84.1px] text-7xs-1 leading-[8.44px] font-medium text-gray-100 text-center inline-block w-[23.1px] h-[8.4px]">
              Free Plan
            </div>
            <div className="absolute top-[673px] left-[88.1px] text-6xs leading-[8.44px] font-medium text-gray-100 text-center inline-block w-[15.2px] h-[8.4px]">
              Free
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[687.1px] left-[70.6px] w-[50.1px] h-[12.7px]">
              <div className="absolute top-[0px] left-[0px] rounded-[14.07px] box-border w-[50.1px] h-[12.7px] border-[0.6px] border-solid border-tomato-100" />
              <b className="absolute top-[3.7px] left-[17.7px] text-8xs-5 inline-block font-rubik text-tomato-100 text-left w-[14.6px] h-[5.3px]">
                Select
              </b>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[687.1px] left-[177.6px] w-[50.1px] h-[12.7px]">
              <div className="absolute top-[0px] left-[0px] rounded-[14.07px] box-border w-[50.1px] h-[12.7px] border-[0.6px] border-solid border-tomato-100" />
              <b className="absolute top-[3.7px] left-[17.7px] text-8xs-5 inline-block font-rubik text-tomato-100 text-left w-[14.6px] h-[5.3px]">
                Select
              </b>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[687.1px] left-[284.5px] w-[50.1px] h-[17.4px]">
              <div className="absolute top-[4.8px] left-[7.1px] rounded-[16.88px] bg-tomato-300 [filter:blur(15.2px)] w-[35.8px] h-[12.7px]" />
              <div className="absolute top-[0px] left-[0px] rounded-[14.07px] bg-tomato-100 w-[50.1px] h-[12.7px]" />
              <b className="absolute top-[3.7px] left-[17.7px] text-8xs-5 inline-block font-rubik text-white text-left w-[14.6px] h-[5.3px]">
                Select
              </b>
            </button>
            <div className="absolute top-[1353.2px] left-[202.6px] w-[20.8px] h-[78.8px]">
              <div className="absolute top-[0px] left-[0px] text-7xs-1 leading-[8.44px] font-medium text-gray-100 inline-block w-5 h-[8.4px]">
                Product
              </div>
              <div className="absolute top-[14.1px] left-[0px] leading-[8.44px] inline-block w-[20.8px] h-[8.4px]">{`Download `}</div>
              <div className="absolute top-[25.3px] left-[0px] leading-[8.44px] inline-block w-[14.6px] h-[8.4px]">
                Pricing
              </div>
              <div className="absolute top-[36.6px] left-[0px] leading-[8.44px] inline-block w-[20.5px] h-[8.4px]">
                Locations
              </div>
              <div className="absolute top-[47.8px] left-[0px] leading-[8.44px] inline-block w-[13.8px] h-[8.4px]">
                Server
              </div>
              <div className="absolute top-[59.1px] left-[0px] leading-[8.44px] inline-block w-[20.5px] h-[8.4px]">
                Countries
              </div>
              <div className="absolute top-[70.4px] left-[0px] leading-[8.44px] inline-block w-[9.6px] h-[8.4px]">
                Blog
              </div>
            </div>
            <div className="absolute top-[1353.2px] left-[258.9px] w-[34.6px] h-[78.8px]">
              <div className="absolute top-[0px] left-[0px] text-7xs-1 leading-[8.44px] font-medium text-gray-100 inline-block w-[18.6px] h-[8.4px]">
                Engage
              </div>
              <div className="absolute top-[14.1px] left-[0px] leading-[8.44px] inline-block w-[25.6px] h-[8.4px]">{`LaslesVPN ? `}</div>
              <div className="absolute top-[25.3px] left-[0px] leading-[8.44px] inline-block w-[8.4px] h-[8.4px]">
                FAQ
              </div>
              <div className="absolute top-[36.6px] left-[0px] leading-[8.44px] inline-block w-[18px] h-[8.4px]">
                Tutorials
              </div>
              <div className="absolute top-[47.8px] left-[0px] leading-[8.44px] inline-block w-[19.4px] h-[8.4px]">
                About Us
              </div>
              <div className="absolute top-[59.1px] left-[0px] leading-[8.44px] inline-block w-[29px] h-[8.4px]">
                Privacy Policy
              </div>
              <div className="absolute top-[70.4px] left-[0px] leading-[8.44px] inline-block w-[34.6px] h-[8.4px]">
                Terms of Service
              </div>
            </div>
            <div className="absolute top-[1353.2px] left-[329px] w-[34px] h-[33.8px]">
              <div className="absolute top-[0px] left-[0px] w-[34px] h-[33.8px]">
                <div className="absolute top-[0px] left-[0px] text-7xs-1 leading-[8.44px] font-medium text-gray-100 inline-block w-[28.7px] h-[8.4px]">
                  Earn Money
                </div>
                <div className="absolute top-[14.1px] left-[0px] leading-[8.44px] inline-block w-[15.8px] h-[8.4px]">
                  Affiliate
                </div>
                <div className="absolute top-[25.3px] left-[0px] leading-[8.44px] inline-block w-[34px] h-[8.4px]">
                  Become Partner
                </div>
              </div>
            </div>
            <div className="absolute top-[1368.2px] left-[42.2px] leading-[8.44px] inline-block w-[95.7px] h-[17.3px]">
              <span className="font-medium">LaslesVPN</span>
              <span>
                {" "}
                is a private virtual network that has unique features and has
                high security.
              </span>
            </div>
            <div className="absolute top-[1411.8px] left-[42.2px] leading-[8.44px] text-silver text-center inline-block w-[37.1px] h-[8.4px]">
              <span>©2020Lasles</span>
              <span className="font-medium">VPN</span>
            </div>
            <div className="absolute top-[1084.6px] left-[42.2px] w-[365.8px] h-[166px] text-gray-100">
              <div className="absolute top-[67.5px] left-[11.5px] rounded-[2.81px] bg-gray-200 [filter:blur(32.08px)] w-[89.6px] h-[84.6px] opacity-[0.06]" />
              <div className="absolute top-[33.8px] left-[82.3px] leading-[8.44px] text-dimgray text-center inline-block w-[156.2px] h-[16.9px]">
                These are the stories of our customers who have joined us with
                great pleasure when using this crazy feature.
              </div>
              <div className="absolute top-[0px] left-[97.4px] text-3xs-8 leading-[14.07px] font-medium text-center inline-block w-[126px] h-[28.1px]">
                Trusted by Thousands of Happy Customer
              </div>
              <textarea className="bg-white [outline:none] absolute top-[67.5px] left-[0px] rounded-[2.81px] box-border w-[112.6px] h-[64.7px] border-[0.6px] border-solid border-tomato-100" />
              <textarea className="bg-[transparent] [outline:none] absolute top-[67.5px] left-[126.6px] rounded-[2.81px] box-border w-[112.6px] h-[64.7px] border-[0.6px] border-solid border-gainsboro-200" />
              <textarea className="bg-[transparent] [outline:none] absolute top-[67.5px] left-[253.3px] rounded-[2.81px] box-border w-[112.6px] h-[64.7px] border-[0.6px] border-solid border-gainsboro-200" />
              <div className="absolute top-[155.5px] left-[0px] w-[38px] h-[4.2px]">
                <div className="absolute top-[0px] left-[16.9px] rounded-[50%] bg-gainsboro-100 w-[4.2px] h-[4.2px]" />
                <div className="absolute top-[0px] left-[25.3px] rounded-[50%] bg-gainsboro-100 w-[4.2px] h-[4.2px]" />
                <div className="absolute top-[0px] left-[33.8px] rounded-[50%] bg-gainsboro-100 w-[4.2px] h-[4.2px]" />
                <img
                  className="relative w-[12.7px] h-[4.2px] object-cover"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <div className="absolute top-[76px] left-[8.4px] w-[51.2px] h-[14.1px] text-center text-7xs-1">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[14.1px] h-[14.1px] object-cover"
                  alt=""
                  src="/ellipse-175@2x.png"
                />
                <div className="absolute top-[1.8px] left-[19.7px] leading-[8.44px] font-medium flex items-center justify-center w-[31.5px] h-[5.1px]">
                  Viezh Robert
                </div>
                <div className="absolute top-[8.3px] left-[20px] text-9xs-9 leading-[8.44px] text-dimgray flex items-center justify-center w-[28.4px] h-[3.9px]">
                  Warsaw, Poland
                </div>
              </div>
              <div className="absolute top-[76px] left-[135.1px] w-[59.7px] h-[14.1px] text-7xs-1">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[14.1px] h-[14.1px] object-cover"
                  alt=""
                  src="/ellipse-175@2x.png"
                />
                <div className="absolute top-[1.8px] left-[19.7px] leading-[8.44px] font-medium flex items-center w-10 h-[5.1px]">
                  Yessica Christy
                </div>
                <div className="absolute top-[8.3px] left-[20px] text-9xs-9 leading-[8.44px] text-dimgray flex items-center w-[30.8px] h-[3.9px]">
                  Shanxi, China
                </div>
              </div>
              <div className="absolute top-[76px] left-[261.7px] w-[59.7px] h-[14.1px] text-7xs-1">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[14.1px] h-[14.1px] object-cover"
                  alt=""
                  src="/ellipse-175@2x.png"
                />
                <div className="absolute top-[1.8px] left-[19.7px] leading-[8.44px] font-medium flex items-center w-10 h-[5.1px]">
                  Kim Young Jou
                </div>
                <div className="absolute top-[8.3px] left-[20px] text-9xs-9 leading-[8.44px] text-dimgray flex items-center w-[35.8px] h-[3.9px]">
                  Seoul, South Korea
                </div>
              </div>
              <div className="absolute top-[95.7px] left-[8.4px] leading-[8.44px] flex items-center w-[95.7px] h-[28.1px]">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </div>
              <div className="absolute top-[92.3px] left-[135.1px] leading-[8.44px] inline-block w-[95.7px] h-[28.1px]">
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </div>
              <div className="absolute top-[90.9px] left-[261.7px] leading-[8.44px] flex items-center w-[95.7px] h-[28.1px]">
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </div>
              <img
                className="absolute top-[149.1px] left-[281.4px] w-[16.9px] h-[16.9px] object-cover"
                alt=""
                src="/buttonnonactleft@2x.png"
              />
              <img
                className="absolute top-[149.1px] left-[303.9px] w-[16.9px] h-[16.9px]"
                alt=""
                src="/buttonactright.svg"
              />
              <div className="absolute top-[80.9px] left-[90px] leading-[8.44px] flex items-center w-[6.8px] h-[4.5px]">
                4.5
              </div>
              <img
                className="absolute top-[80.7px] left-[99.6px] w-[4.5px] h-[4.5px]"
                alt=""
                src="/group-1161.svg"
              />
              <div className="absolute top-[80.7px] left-[216.7px] w-[14.1px] h-[4.7px]">
                <div className="absolute top-[0.2px] left-[0px] leading-[8.44px] flex items-center w-[6.8px] h-[4.5px]">
                  4.5
                </div>
                <img
                  className="absolute top-[0px] left-[9.6px] w-[4.5px] h-[4.5px]"
                  alt=""
                  src="/group-1161.svg"
                />
              </div>
              <div className="absolute top-[80.7px] left-[343.3px] w-[14.1px] h-[4.7px]">
                <div className="absolute top-[0.2px] left-[0px] leading-[8.44px] flex items-center w-[6.8px] h-[4.5px]">
                  4.5
                </div>
                <img
                  className="absolute top-[0px] left-[9.6px] w-[4.5px] h-[4.5px]"
                  alt=""
                  src="/group-1161.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[1393.9px] left-[42.2px] w-[9.5px] h-[9.5px] object-cover"
              alt=""
              src="/socmedfacebook@2x.png"
            />
            <img
              className="absolute top-[1393.9px] left-[57.3px] w-[9.5px] h-[9.5px] object-cover"
              alt=""
              src="/socmedtwitter@2x.png"
            />
            <img
              className="absolute top-[1393.9px] left-[72.4px] w-[9.5px] h-[9.5px] object-cover"
              alt=""
              src="/socmedinstagram@2x.png"
            />
            <img
              className="absolute top-[1011.9px] left-[40.8px] w-[319.6px] h-[58.6px] object-cover"
              alt=""
              src="/sponsored@2x.png"
            />
            <img
              className="absolute top-[850.5px] left-[53.5px] w-[298.3px] h-[151.3px] object-cover"
              alt=""
              src="/huge-global@2x.png"
            />
            <div className="absolute top-[1268.9px] left-[42.2px] w-[320.8px] h-[65.6px] text-3xs-8 text-gray-100">
              <div className="absolute top-[0px] left-[0px] rounded-[2.81px] bg-white w-[320.8px] h-[65.6px]" />
              <div className="absolute top-[16.5px] left-[19.7px] w-[115.4px] h-[32.6px]">
                <div className="absolute top-[0px] left-[0px] leading-[12.66px] font-medium flex items-center w-[104.6px] h-[22.5px]">
                  Subscribe Now for Get Special Features!
                </div>
                <div className="absolute top-[28.1px] left-[0px] text-8xs-5 leading-[8.44px] text-dimgray flex items-center w-[115.4px] h-[4.5px]">
                  Let's subscribe with us and find the fun.
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[24.3px] left-[230.7px] w-[70.4px] h-6">
                <div className="absolute top-[7.1px] left-[5.4px] rounded-[2.81px] bg-tomato-300 [filter:blur(15.2px)] w-[59.6px] h-[16.9px]" />
                <div className="absolute top-[0px] left-[0px] rounded-[2.81px] bg-tomato-100 w-[70.4px] h-[16.9px]" />
                <b className="absolute top-[4.9px] left-[18.3px] text-8xs-5 leading-[7.04px] inline-block font-rubik text-white text-left w-[33.8px] h-[7px]">
                  Subscribe Now
                </b>
              </button>
            </div>
            <div className="absolute top-[201.9px] left-[52.2px] rounded-[2.81px] bg-gray-200 [filter:blur(32.08px)] w-[300.8px] h-[53.2px] opacity-[0.06]" />
            <div className="absolute top-[187px] left-[42.2px] rounded-[2.81px] bg-white w-[320.8px] h-[56.3px]" />
            <div className="absolute top-[14.1px] left-[42.2px] w-[41.9px] h-[10.2px] text-7xs-6 text-gray-100">
              <div className="absolute top-[1.7px] left-[12.7px] inline-block w-[29.3px] h-[6.8px]">
                <span className="font-medium">Lasles</span>
                <b>VPN</b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[9.8px] h-[10.2px]"
                alt=""
                src="/standard-collection-27.svg"
              />
            </div>
            <div className="absolute top-[16.5px] left-[182.3px] inline-block w-[14.6px] h-[5.3px]">
              Pricing
            </div>
            <div className="absolute top-[16.5px] left-[152.5px] inline-block w-[18.6px] h-[5.3px]">
              Features
            </div>
            <div className="absolute top-[16.5px] left-[208.2px] inline-block w-[26.2px] h-[5.3px]">
              Testimonials
            </div>
            <div className="absolute top-[16.5px] left-[128.3px] inline-block w-[12.9px] h-[5.3px]">
              About
            </div>
            <div className="absolute top-[16.5px] left-[245.7px] inline-block w-[9.6px] h-[5.3px]">
              Help
            </div>
            <div className="absolute top-[16.5px] left-[297.4px] font-medium text-gray-100 inline-block w-[14.9px] h-[5.3px]">
              Sign In
            </div>
            <div className="absolute top-[12.8px] left-[320.8px] w-[42.2px] h-[12.7px] text-crimson">
              <div className="absolute top-[0px] left-[0px] rounded-[14.07px] box-border w-[42.2px] h-[12.7px] border-[0.3px] border-solid border-crimson" />
              <div className="absolute top-[3.7px] left-[12.7px] font-medium inline-block w-[16.9px] h-[5.3px]">
                Sign Up
              </div>
            </div>
            <div className="absolute top-[58.2px] left-[42.2px] text-[14.1px] leading-[19.7px] text-gray-100 inline-block w-[156.2px] h-[39.4px]">
              <span className="font-medium">Want anything to be easy with</span>
              <b> LaslesVPN.</b>
            </div>
            <div className="absolute top-[103.2px] left-[42.2px] leading-[8.44px] inline-block w-[156.2px] h-[16.9px]">
              <span>{`Provide a network for all your needs with ease and fun using `}</span>
              <span className="font-medium">{`LaslesVPN `}</span>
              <span>discover interesting features from us.</span>
            </div>
            <div className="absolute top-[134.2px] left-[42.2px] w-[70.4px] h-6 text-white">
              <div className="absolute top-[7.1px] left-[5.4px] rounded-[2.81px] bg-tomato-300 [filter:blur(15.2px)] w-[59.6px] h-[16.9px]" />
              <div className="absolute top-[0px] left-[0px] rounded-[2.81px] bg-tomato-100 w-[70.4px] h-[16.9px]" />
              <b className="absolute top-[4.9px] left-[21.8px] leading-[7.04px] inline-block w-[26.7px] h-[7px]">
                Get Started
              </b>
            </div>
            <div className="absolute top-[206px] left-[202.6px] w-[25.6px] h-[18.3px] text-7xs-6">
              <div className="absolute top-[0px] left-[0px] w-[25.6px] h-[18.3px]">
                <div className="absolute top-[9.8px] left-[0px] leading-[8.44px] inline-block w-[25.6px] h-[8.4px]">
                  Locations
                </div>
                <b className="absolute top-[0px] left-[0px] text-6xs leading-[8.44px] inline-block text-gray-100 w-[13.8px] h-[8.4px]">
                  30+
                </b>
              </div>
            </div>
            <div className="absolute top-[206px] left-[93.6px] w-[14.9px] h-[18.3px] text-7xs-6">
              <div className="absolute top-[9.8px] left-[0px] leading-[8.44px] inline-block w-[14.9px] h-[8.4px]">
                Users
              </div>
              <b className="absolute top-[0px] left-[0px] text-6xs leading-[8.44px] inline-block text-gray-100 w-[13.8px] h-[8.4px]">
                90+
              </b>
            </div>
            <div className="absolute top-[206px] left-[317.6px] w-5 h-[18.3px] text-7xs-6">
              <div className="absolute top-[0px] left-[0px] w-5 h-[18.3px]">
                <div className="absolute top-[9.8px] left-[0px] leading-[8.44px] inline-block w-5 h-[8.4px]">
                  Servers
                </div>
                <b className="absolute top-[0px] left-[0px] text-6xs leading-[8.44px] inline-block text-gray-100 w-[13.8px] h-[8.4px]">
                  50+
                </b>
              </div>
            </div>
            <img
              className="absolute top-[197.5px] left-[145.1px] w-0 h-[35.3px]"
              alt=""
              src="/vector-14.svg"
            />
            <img
              className="absolute top-[197.5px] left-[266.1px] w-0 h-[35.3px]"
              alt=""
              src="/vector-15.svg"
            />
            <div className="absolute top-[207.4px] left-[176.9px] w-[15.5px] h-[15.5px]">
              <div className="absolute top-[0px] left-[0px] rounded-lgi-7 bg-lavenderblush w-[15.5px] h-[15.5px]" />
              <img
                className="absolute top-[4.4px] left-[4.4px] w-[6.8px] h-[6.8px]"
                alt=""
                src="/group-1215.svg"
              />
            </div>
            <div className="absolute top-[207.4px] left-[67.8px] w-[15.5px] h-[15.5px]">
              <div className="absolute top-[0px] left-[0px] rounded-lgi-7 bg-lavenderblush w-[15.5px] h-[15.5px]" />
              <img
                className="absolute top-[4.4px] left-[4.4px] w-[6.8px] h-[6.8px]"
                alt=""
                src="/group-1216.svg"
              />
            </div>
            <img
              className="absolute top-[207.4px] left-[291.8px] w-[15.5px] h-[15.5px]"
              alt=""
              src="/iconserver.svg"
            />
            <div className="absolute top-[594.2px] left-[68.9px] w-[53.5px] h-[42.2px] text-9xs-9">
              <div className="absolute top-[11.3px] left-[0px] w-[53.5px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.4px] leading-[8.44px] inline-block w-[41.1px] h-[8.4px]">
                  Encrypted Connection
                </div>
                <img
                  className="absolute h-[80.95%] w-[12.71%] top-[9.52%] right-[87.29%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/group-1223@2x.png"
                />
              </div>
              <div className="absolute h-[19.91%] w-[73.08%] top-[53.32%] right-[26.73%] bottom-[26.78%] left-[0.19%]">
                <img
                  className="absolute h-[80.95%] w-[17.39%] top-[9.52%] right-[82.61%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/group-1224@2x.png"
                />
                <div className="absolute top-[0px] left-[12.4px] leading-[8.44px] inline-block w-[26.7px] h-[8.4px]">
                  No Traffic Logs
                </div>
              </div>
              <div className="absolute h-[19.91%] w-[92.71%] top-[80.09%] right-[7.29%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-[80.95%] w-[13.71%] top-[9.52%] right-[86.29%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/group-1225@2x.png"
                />
                <div className="absolute top-[0px] left-[12.5px] leading-[8.44px] inline-block w-[37.1px] h-[8.4px]">
                  Works on All Devices
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[50.7px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.4px] leading-[8.44px] inline-block w-[38.3px] h-[8.4px]">
                  Unlimited Bandwitch
                </div>
                <img
                  className="absolute top-[0.8px] left-[0px] w-[6.8px] h-[6.8px] object-cover"
                  alt=""
                  src="/group-1223@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[594.2px] left-[175.8px] w-[53.6px] h-[53.5px] text-9xs-9">
              <div className="absolute top-[11.3px] left-[0.1px] w-[53.5px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.4px] leading-[8.44px] inline-block w-[41.1px] h-[8.4px]">
                  Encrypted Connection
                </div>
                <img
                  className="absolute h-[80.95%] w-[12.71%] top-[9.52%] right-[87.29%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/group-1227@2x.png"
                />
              </div>
              <div className="absolute top-[22.5px] left-[0px] w-[40.7px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.5px] leading-[8.44px] inline-block w-[28.1px] h-[8.4px]">
                  Yes Traffic Logs
                </div>
                <img
                  className="absolute h-[80.95%] w-[16.71%] top-[9.52%] right-[83.29%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1228.svg"
                />
              </div>
              <div className="absolute top-[33.8px] left-[0px] w-[49.7px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.5px] leading-[8.44px] inline-block w-[37.1px] h-[8.4px]">
                  Works on All Devices
                </div>
                <img
                  className="absolute h-[80.95%] w-[13.68%] top-[9.52%] right-[86.32%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1228.svg"
                />
              </div>
              <div className="absolute top-[45px] left-[0.2px]">
                <Button
                  sx={{ width: 45 }}
                  id="button-Connect Anyware"
                  aria-controls="menu-Connect Anyware"
                  aria-haspopup="true"
                  aria-expanded={groupDropdownOpen ? "true" : undefined}
                  onClick={handleGroupDropdownClick}
                  color="primary"
                >
                  
                </Button>
                <Menu
                  anchorEl={groupDropdownAnchorEl}
                  open={groupDropdownOpen}
                  onClose={handleGroupDropdownClose}
                />
              </div>
              <div className="absolute top-[0px] left-[0.1px] w-[50.8px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.5px] leading-[8.44px] inline-block w-[38.3px] h-[8.4px]">
                  Unlimited Bandwitch
                </div>
                <img
                  className="absolute top-[0.8px] left-[0px] w-[6.8px] h-[6.8px]"
                  alt=""
                  src="/group-1226.svg"
                />
              </div>
            </div>
            <div className="absolute top-[594.2px] left-[282.7px] w-[53.6px] h-[64.7px] text-9xs-9">
              <div className="absolute top-[11.3px] left-[0.1px] w-[53.5px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.4px] leading-[8.44px] inline-block w-[41.1px] h-[8.4px]">
                  Encrypted Connection
                </div>
                <img
                  className="absolute h-[80.95%] w-[12.71%] top-[9.52%] right-[87.29%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1228.svg"
                />
              </div>
              <div className="absolute top-[22.5px] left-[0px] w-[40.7px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.5px] leading-[8.44px] inline-block w-[28.1px] h-[8.4px]">
                  Yes Traffic Logs
                </div>
                <img
                  className="absolute h-[80.95%] w-[16.71%] top-[9.52%] right-[83.29%] bottom-[9.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1228.svg"
                />
              </div>
              <div className="absolute top-[33.8px] left-[0px]">
                <Button
                  sx={{ width: 49.7 }}
                  id="button-Works on All Devices"
                  aria-controls="menu-Works on All Devices"
                  aria-haspopup="true"
                  aria-expanded={groupDropdown1Open ? "true" : undefined}
                  onClick={handleGroupDropdown1Click}
                  color="primary"
                >
                  
                </Button>
                <Menu
                  anchorEl={groupDropdown1AnchorEl}
                  open={groupDropdown1Open}
                  onClose={handleGroupDropdown1Close}
                />
              </div>
              <div className="absolute top-[45px] left-[0.2px]">
                <Button
                  sx={{ width: 45 }}
                  id="button-Connect Anyware"
                  aria-controls="menu-Connect Anyware"
                  aria-haspopup="true"
                  aria-expanded={groupDropdown2Open ? "true" : undefined}
                  onClick={handleGroupDropdown2Click}
                  color="primary"
                >
                  
                </Button>
                <Menu
                  anchorEl={groupDropdown2AnchorEl}
                  open={groupDropdown2Open}
                  onClose={handleGroupDropdown2Close}
                />
              </div>
              <div className="absolute top-[56.3px] left-[0.2px]">
                <Button
                  sx={{ width: 45 }}
                  id="button-Get New Features"
                  aria-controls="menu-Get New Features"
                  aria-haspopup="true"
                  aria-expanded={groupDropdown3Open ? "true" : undefined}
                  onClick={handleGroupDropdown3Click}
                  color="primary"
                >
                  
                </Button>
                <Menu
                  anchorEl={groupDropdown3AnchorEl}
                  open={groupDropdown3Open}
                  onClose={handleGroupDropdown3Close}
                />
              </div>
              <div className="absolute top-[0px] left-[0.1px] w-[50.8px] h-[8.4px]">
                <div className="absolute top-[0px] left-[12.5px] leading-[8.44px] inline-block w-[38.3px] h-[8.4px]">
                  Unlimited Bandwitch
                </div>
                <img
                  className="absolute top-[0.8px] left-[0px] w-[6.8px] h-[6.8px]"
                  alt=""
                  src="/group-1228.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[50.4px] left-[209.9px] w-[172px] h-[107.6px] object-contain"
              alt=""
              src="/illustration-1@2x.png"
            />
            <img
              className="absolute top-[522.3px] left-[182.2px] w-[40.8px] h-[46.5px] object-contain"
              alt=""
              src="/illustrationstandard@2x.png"
            />
            <img
              className="absolute top-[522.3px] left-[75.3px] w-[40.8px] h-[46.5px] object-contain"
              alt=""
              src="/illustrationfree@2x.png"
            />
            <img
              className="absolute top-[522.3px] left-[289.2px] w-[40.8px] h-[46.5px] object-contain"
              alt=""
              src="/illustrationpremium@2x.png"
            />
            <img
              className="absolute top-[270.3px] left-[51.9px] w-[143px] h-[116.7px] object-contain"
              alt=""
              src="/illustration-2@2x.png"
            />
          </div>
          <div className="absolute top-[388px] left-[0px] rounded-2xl shadow-[0px_2.1px_28.8px_rgba(22,_36,_53,_0.1)] box-border w-[406px] h-[1072px] border-[5.3px] border-solid border-white" />
        </div>
        <div className="absolute top-[574px] left-[554.9px] rounded-[97.95px] bg-gray-300 [filter:blur(222.62px)] w-[188px] h-[744px]" />
        <div className="absolute top-[500.9px] left-[0px] w-[676.5px] h-[2437.9px] text-5xs-5">
          <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[676.5px] h-[2437.9px] overflow-hidden">
            <img
              className="absolute top-[0px] left-[0.4px] w-[676.1px] h-[2437.9px]"
              alt=""
              src="/rectangle-328.svg"
            />
            <div className="absolute top-[1506.3px] left-[0.9px] [background:linear-gradient(180deg,_#f8f8f8,_rgba(248,_248,_248,_0))] w-[1440.2px] h-[2083.2px]" />
            <div className="absolute top-[2173.3px] left-[0px] bg-whitesmoke-100 w-[676.5px] h-[264.6px]" />
            <div className="absolute top-[2126.3px] left-[85.2px] rounded-8xs-7 bg-gray-200 [filter:blur(53.56px)] w-[506.1px] h-[117.5px] opacity-[0.06]" />
            <div className="absolute top-[2257.9px] left-[70.5px] w-[70px] h-[17px] text-3xs-4 text-gray-100">
              <div className="absolute top-[2.9px] left-[21.1px] inline-block w-[48.9px] h-[11.3px]">
                <span className="font-medium">Lasles</span>
                <b>VPN</b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[16.4px] h-[17px]"
                alt=""
                src="/standard-collection-27.svg"
              />
            </div>
            <div className="absolute top-[533px] left-[405px] leading-[14.09px] inline-block w-[201px] h-[28.2px]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            <div className="absolute top-[778.3px] left-[207.9px] leading-[14.09px] text-center inline-block w-[260.8px] h-[28.2px]">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </div>
            <div className="absolute top-[1318.6px] left-[207.9px] leading-[14.09px] text-center inline-block w-[260.8px] h-[28.2px]">
              <span>{`See `}</span>
              <span className="font-medium">LaslesVPN</span>
              <span>
                {" "}
                everywhere to make it easier for you when you move locations.
              </span>
            </div>
            <div className="absolute top-[570.6px] left-[421.1px] text-6xs-6 leading-[14.09px] inline-block w-[84.1px] h-[14.1px]">
              Powerfull online protection.
            </div>
            <div className="absolute top-[591.8px] left-[421.1px] text-6xs-6 leading-[14.09px] inline-block w-[76.6px] h-[14.1px]">
              Internet without borders.
            </div>
            <div className="absolute top-[612.9px] left-[421.1px] text-6xs-6 leading-[14.09px] inline-block w-[57.8px] h-[14.1px]">
              Supercharged VPN
            </div>
            <div className="absolute top-[634.1px] left-[421.1px] text-6xs-6 leading-[14.09px] inline-block w-[68.1px] h-[14.1px]">
              No specific time limits.
            </div>
            <div className="absolute top-[476.7px] left-[405px] text-base-4 leading-[23.49px] font-medium text-gray-100 inline-block w-[180.1px] h-[47px]">
              We Provide Many Features You Can Use
            </div>
            <div className="absolute top-[745.4px] left-[248.2px] text-base-4 leading-[23.49px] font-medium text-gray-100 text-center inline-block w-[180.1px] h-[23.5px]">
              Choose Your Plan
            </div>
            <div className="absolute top-[1262.2px] left-[248.2px] text-base-4 leading-[23.49px] font-medium text-gray-100 text-center inline-block w-[180.1px] h-[47px]">
              Huge Global Network of Fast VPN
            </div>
            <img
              className="absolute top-[572px] left-[405px] w-[11.3px] h-[11.3px]"
              alt=""
              src="/group-1120.svg"
            />
            <img
              className="absolute top-[593.2px] left-[405px] w-[11.3px] h-[11.3px]"
              alt=""
              src="/group-1121.svg"
            />
            <img
              className="absolute top-[614.3px] left-[405px] w-[11.3px] h-[11.3px]"
              alt=""
              src="/group-1122.svg"
            />
            <img
              className="absolute top-[635.5px] left-[405px] w-[11.3px] h-[11.3px] overflow-hidden"
              alt=""
              src="/bxbxscheckcircle.svg"
            />
            <div className="absolute top-[834.7px] left-[439.3px] rounded-8xs-7 bg-white box-border w-[155px] h-[357.1px] border-[0.9px] border-solid border-tomato-100" />
            <div className="absolute top-[963.9px] left-[488.4px] text-4xs-5 leading-[14.09px] font-medium text-gray-100 text-center inline-block w-[56.8px] h-[14.1px]">
              Premium Plan
            </div>
            <div className="absolute top-[1123.6px] left-[492.4px] text-xs-7 leading-[14.09px] text-center inline-block w-[48.9px] h-[14.1px] text-gray-100">
              <span className="font-medium">{`$12 `}</span>
              <span className="text-dimgray">/ mo</span>
            </div>
            <div className="absolute top-[834.7px] left-[260.8px] rounded-8xs-7 bg-white box-border w-[155px] h-[357.1px] border-[0.9px] border-solid border-gainsboro-200" />
            <div className="absolute top-[963.9px] left-[309.4px] text-4xs-5 leading-[14.09px] font-medium text-gray-100 text-center inline-block w-[57.8px] h-[14.1px]">
              Standard Plan
            </div>
            <div className="absolute top-[1123.6px] left-[316.7px] text-xs-7 leading-[14.09px] text-center inline-block w-[43.2px] h-[14.1px] text-gray-100">
              <span className="font-medium">{`$9 `}</span>
              <span className="text-dimgray">/ mo</span>
            </div>
            <div className="absolute top-[834.7px] left-[82.2px] rounded-8xs-7 bg-white box-border w-[155px] h-[357.1px] border-[0.9px] border-solid border-gainsboro-200" />
            <div className="absolute top-[963.9px] left-[140.5px] text-4xs-5 leading-[14.09px] font-medium text-gray-100 text-center inline-block w-[38.5px] h-[14.1px]">
              Free Plan
            </div>
            <div className="absolute top-[1123.6px] left-[147.1px] text-xs-7 leading-[14.09px] font-medium text-gray-100 text-center inline-block w-[25.4px] h-[14.1px]">
              Free
            </div>
            <div className="absolute top-[1147.1px] left-[118px] w-[83.6px] h-[21.1px] text-tomato-100">
              <div className="absolute top-[0px] left-[0px] rounded-[23.49px] box-border w-[83.6px] h-[21.1px] border-[0.9px] border-solid border-tomato-100" />
              <b className="absolute top-[6.1px] left-[29.6px] inline-block w-[24.4px] h-[8.9px]">
                Select
              </b>
            </div>
            <div className="absolute top-[1147.1px] left-[296.5px] w-[83.6px] h-[21.1px] text-tomato-100">
              <div className="absolute top-[0px] left-[0px] rounded-[23.49px] box-border w-[83.6px] h-[21.1px] border-[0.9px] border-solid border-tomato-100" />
              <b className="absolute top-[6.1px] left-[29.6px] inline-block w-[24.4px] h-[8.9px]">
                Select
              </b>
            </div>
            <div className="absolute top-[1147.1px] left-[475px] w-[83.6px] h-[29.1px] text-white">
              <div className="absolute top-[8px] left-[11.9px] rounded-[28.19px] bg-tomato-300 [filter:blur(25.37px)] w-[59.8px] h-[21.1px]" />
              <div className="absolute top-[0px] left-[0px] rounded-[23.49px] bg-tomato-100 w-[83.6px] h-[21.1px]" />
              <b className="absolute top-[6.1px] left-[29.6px] inline-block w-[24.4px] h-[8.9px]">
                Select
              </b>
            </div>
            <div className="absolute top-[2259.3px] left-[338.3px] w-[34.8px] h-[131.6px]">
              <div className="absolute top-[0px] left-[0px] text-4xs-5 leading-[14.09px] font-medium text-gray-100 inline-block w-[33.4px] h-[14.1px]">
                Product
              </div>
              <div className="absolute top-[23.5px] left-[0px] leading-[14.09px] inline-block w-[34.8px] h-[14.1px]">{`Download `}</div>
              <div className="absolute top-[42.3px] left-[0px] leading-[14.09px] inline-block w-[24.4px] h-[14.1px]">
                Pricing
              </div>
              <div className="absolute top-[61.1px] left-[0px] leading-[14.09px] inline-block w-[34.3px] h-[14.1px]">
                Locations
              </div>
              <div className="absolute top-[79.9px] left-[0px] leading-[14.09px] inline-block w-[23px] h-[14.1px]">
                Server
              </div>
              <div className="absolute top-[98.7px] left-[0px] leading-[14.09px] inline-block w-[34.3px] h-[14.1px]">
                Countries
              </div>
              <div className="absolute top-[117.5px] left-[0px] leading-[14.09px] inline-block w-4 h-[14.1px]">
                Blog
              </div>
            </div>
            <div className="absolute top-[2259.3px] left-[432.2px] w-[57.8px] h-[131.6px]">
              <div className="absolute top-[0px] left-[0px] text-4xs-5 leading-[14.09px] font-medium text-gray-100 inline-block w-[31px] h-[14.1px]">
                Engage
              </div>
              <div className="absolute top-[23.5px] left-[0px] leading-[14.09px] inline-block w-[42.8px] h-[14.1px]">{`LaslesVPN ? `}</div>
              <div className="absolute top-[42.3px] left-[0px] leading-[14.09px] inline-block w-[14.1px] h-[14.1px]">
                FAQ
              </div>
              <div className="absolute top-[61.1px] left-[0px] leading-[14.09px] inline-block w-[30.1px] h-[14.1px]">
                Tutorials
              </div>
              <div className="absolute top-[79.9px] left-[0px] leading-[14.09px] inline-block w-[32.4px] h-[14.1px]">
                About Us
              </div>
              <div className="absolute top-[98.7px] left-[0px] leading-[14.09px] inline-block w-[48.4px] h-[14.1px]">
                Privacy Policy
              </div>
              <div className="absolute top-[117.5px] left-[0px] leading-[14.09px] inline-block w-[57.8px] h-[14.1px]">
                Terms of Service
              </div>
            </div>
            <div className="absolute top-[2259.3px] left-[549.2px] w-[56.8px] h-[56.4px]">
              <div className="absolute top-[0px] left-[0px] w-[56.8px] h-[56.4px]">
                <div className="absolute top-[0px] left-[0px] text-4xs-5 leading-[14.09px] font-medium text-gray-100 inline-block w-[47.9px] h-[14.1px]">
                  Earn Money
                </div>
                <div className="absolute top-[23.5px] left-[0px] leading-[14.09px] inline-block w-[26.3px] h-[14.1px]">
                  Affiliate
                </div>
                <div className="absolute top-[42.3px] left-[0px] leading-[14.09px] inline-block w-[56.8px] h-[14.1px]">
                  Become Partner
                </div>
              </div>
            </div>
            <div className="absolute top-[2284.3px] left-[70.5px] leading-[14.09px] inline-block w-[159.7px] h-[28.9px]">
              <span className="font-medium">LaslesVPN</span>
              <span>
                {" "}
                is a private virtual network that has unique features and has
                high security.
              </span>
            </div>
            <div className="absolute top-[2357.2px] left-[70.5px] leading-[14.09px] text-silver text-center inline-block w-[62px] h-[14.1px]">
              <span>©2020Lasles</span>
              <span className="font-medium">VPN</span>
            </div>
            <div className="absolute top-[1810.8px] left-[70.5px] w-[610.8px] h-[277.2px] text-gray-100">
              <div className="absolute top-[112.8px] left-[19.2px] rounded-8xs-7 bg-gray-200 [filter:blur(53.56px)] w-[149.6px] h-[141.3px] opacity-[0.06]" />
              <div className="absolute top-[56.4px] left-[137.4px] leading-[14.09px] text-dimgray text-center inline-block w-[260.8px] h-[28.2px]">
                These are the stories of our customers who have joined us with
                great pleasure when using this crazy feature.
              </div>
              <div className="absolute top-[0px] left-[162.6px] text-base-4 leading-[23.49px] font-medium text-center inline-block w-[210.4px] h-[47px]">
                Trusted by Thousands of Happy Customer
              </div>
              <div className="absolute top-[112.8px] left-[0px] rounded-8xs-7 bg-white box-border w-[187.9px] h-[108.1px] border-[0.9px] border-solid border-tomato-100" />
              <div className="absolute top-[112.8px] left-[211.4px] rounded-8xs-7 box-border w-[187.9px] h-[108.1px] border-[0.9px] border-solid border-gainsboro-200" />
              <div className="absolute top-[112.8px] left-[422.8px] rounded-8xs-7 box-border w-[187.9px] h-[108.1px] border-[0.9px] border-solid border-gainsboro-200" />
              <div className="absolute top-[259.6px] left-[0px] w-[63.4px] h-[7px]">
                <div className="absolute top-[0px] left-[28.2px] rounded-[50%] bg-gainsboro-100 w-[7px] h-[7px]" />
                <div className="absolute top-[0px] left-[42.3px] rounded-[50%] bg-gainsboro-100 w-[7px] h-[7px]" />
                <div className="absolute top-[0px] left-[56.4px] rounded-[50%] bg-gainsboro-100 w-[7px] h-[7px]" />
                <img
                  className="relative w-[21.1px] h-[7px]"
                  alt=""
                  src="/union.svg"
                />
              </div>
              <div className="absolute top-[126.9px] left-[14.1px] w-[85.5px] h-[23.5px] text-center text-4xs-5">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[23.5px] h-[23.5px] object-cover"
                  alt=""
                  src="/ellipse-175@2x.png"
                />
                <div className="absolute top-[3.1px] left-[32.9px] leading-[14.09px] font-medium flex items-center justify-center w-[52.6px] h-[8.5px]">
                  Viezh Robert
                </div>
                <div className="absolute top-[13.9px] left-[33.4px] text-6xs-6 leading-[14.09px] text-dimgray flex items-center justify-center w-[47.5px] h-[6.6px]">
                  Warsaw, Poland
                </div>
              </div>
              <div className="absolute top-[126.9px] left-[225.5px] w-[99.6px] h-[23.5px] text-4xs-5">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[23.5px] h-[23.5px] object-cover"
                  alt=""
                  src="/ellipse-175@2x.png"
                />
                <div className="absolute top-[3.1px] left-[32.9px] leading-[14.09px] font-medium flex items-center w-[66.7px] h-[8.5px]">
                  Yessica Christy
                </div>
                <div className="absolute top-[13.9px] left-[33.4px] text-6xs-6 leading-[14.09px] text-dimgray flex items-center w-[51.4px] h-[6.6px]">
                  Shanxi, China
                </div>
              </div>
              <div className="absolute top-[126.9px] left-[436.9px] w-[99.6px] h-[23.5px] text-4xs-5">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[50%] w-[23.5px] h-[23.5px] object-cover"
                  alt=""
                  src="/ellipse-175@2x.png"
                />
                <div className="absolute top-[3.1px] left-[32.9px] leading-[14.09px] font-medium flex items-center w-[66.7px] h-[8.5px]">
                  Kim Young Jou
                </div>
                <div className="absolute top-[13.9px] left-[33.4px] text-6xs-6 leading-[14.09px] text-dimgray flex items-center w-[59.8px] h-[6.6px]">
                  Seoul, South Korea
                </div>
              </div>
              <div className="absolute top-[159.7px] left-[14.1px] leading-[14.09px] flex items-center w-[159.7px] h-[47px]">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </div>
              <div className="absolute top-[154.1px] left-[225.5px] leading-[14.09px] inline-block w-[159.7px] h-[47px]">
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </div>
              <div className="absolute top-[151.8px] left-[436.9px] leading-[14.09px] flex items-center w-[159.7px] h-[47px]">
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </div>
              <img
                className="absolute top-[249px] left-[469.8px] w-[28.2px] h-[28.2px]"
                alt=""
                src="/buttonnonactleft.svg"
              />
              <img
                className="absolute top-[249px] left-[507.4px] w-[28.2px] h-[28.2px]"
                alt=""
                src="/buttonactright.svg"
              />
              <div className="absolute top-[135px] left-[150.3px] leading-[14.09px] flex items-center w-[11.3px] h-[7.5px]">
                4.5
              </div>
              <img
                className="absolute top-[134.7px] left-[166.3px] w-[7.5px] h-[7.5px]"
                alt=""
                src="/group-1161.svg"
              />
              <div className="absolute top-[134.7px] left-[361.8px] w-[23.5px] h-[7.8px]">
                <div className="absolute top-[0.3px] left-[0px] leading-[14.09px] flex items-center w-[11.3px] h-[7.5px]">
                  4.5
                </div>
                <img
                  className="absolute top-[0px] left-[16px] w-[7.5px] h-[7.5px]"
                  alt=""
                  src="/group-1161.svg"
                />
              </div>
              <div className="absolute top-[134.7px] left-[573.2px] w-[23.5px] h-[7.8px]">
                <div className="absolute top-[0.3px] left-[0px] leading-[14.09px] flex items-center w-[11.3px] h-[7.5px]">
                  4.5
                </div>
                <img
                  className="absolute top-[0px] left-[16px] w-[7.5px] h-[7.5px]"
                  alt=""
                  src="/group-1161.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[2327.3px] left-[70.5px] w-[15.8px] h-[15.8px]"
              alt=""
              src="/socmedfacebook.svg"
            />
            <img
              className="absolute top-[2327.3px] left-[95.7px] w-[15.8px] h-[15.8px]"
              alt=""
              src="/socmedtwitter.svg"
            />
            <img
              className="absolute top-[2327.3px] left-[120.8px] w-[15.8px] h-[15.8px]"
              alt=""
              src="/socmedinstagram.svg"
            />
            <img
              className="absolute top-[1689.5px] left-[68.1px] w-[533.6px] h-[97.9px] object-cover"
              alt=""
              src="/sponsored@2x.png"
            />
            <img
              className="absolute top-[1420px] left-[89.3px] w-[498px] h-[252.7px]"
              alt=""
              src="/huge-global.svg"
            />
            <div className="absolute top-[2118.6px] left-[70.5px] w-[535.6px] h-[109.5px] text-base-4 text-gray-100">
              <div className="absolute top-[0px] left-[0px] rounded-8xs-7 bg-white w-[535.6px] h-[109.5px]" />
              <div className="absolute top-[27.5px] left-[32.9px] w-[192.6px] h-[54.5px]">
                <div className="absolute top-[0px] left-[0px] leading-[21.14px] font-medium flex items-center w-[174.6px] h-[37.6px]">
                  Subscribe Now for Get Special Features!
                </div>
                <div className="absolute top-[47px] left-[0px] text-5xs-5 leading-[14.09px] text-dimgray flex items-center w-[192.6px] h-[7.5px]">
                  Let's subscribe with us and find the fun.
                </div>
              </div>
              <div className="absolute top-[40.6px] left-[385.3px] w-[117.5px] h-[40.1px] text-5xs-5 text-white">
                <div className="absolute top-[11.9px] left-[9px] rounded-8xs-7 bg-tomato-300 [filter:blur(25.37px)] w-[99.5px] h-[28.2px]" />
                <div className="absolute top-[0px] left-[0px] rounded-8xs-7 bg-tomato-100 w-[117.5px] h-[28.2px]" />
                <b className="absolute top-[8.2px] left-[30.5px] leading-[11.75px] inline-block w-[56.4px] h-[11.7px]">
                  Subscribe Now
                </b>
              </div>
            </div>
            <div className="absolute top-[337px] left-[87.2px] rounded-8xs-7 bg-gray-200 [filter:blur(53.56px)] w-[502.2px] h-[88.9px] opacity-[0.06]" />
            <input
              className="[border:none] [outline:none] bg-white absolute top-[312.2px] left-[70.5px] rounded-8xs-7 w-[535.6px] h-[94px]"
              type="text"
            />
            <div className="absolute top-[23.5px] left-[70.5px] w-[70px] h-[17px] text-3xs-4 text-gray-100">
              <div className="absolute top-[2.9px] left-[21.1px] inline-block w-[48.9px] h-[11.3px]">
                <span className="font-medium">Lasles</span>
                <b>VPN</b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[16.4px] h-[17px]"
                alt=""
                src="/standard-collection-27.svg"
              />
            </div>
            <div className="absolute top-[27.5px] left-[304.4px] inline-block w-[24.4px] h-[8.9px]">
              Pricing
            </div>
            <div className="absolute top-[27.5px] left-[254.6px] inline-block w-[31px] h-[8.9px]">
              Features
            </div>
            <div className="absolute top-[27.5px] left-[347.7px] inline-block w-[43.7px] h-[8.9px]">
              Testimonials
            </div>
            <div className="absolute top-[27.5px] left-[214.2px] inline-block w-[21.6px] h-[8.9px]">
              About
            </div>
            <div className="absolute top-[27.5px] left-[410.2px] inline-block w-4 h-[8.9px]">
              Help
            </div>
            <div className="absolute top-[27.5px] left-[496.6px] font-medium text-gray-100 inline-block w-[24.9px] h-[8.9px]">
              Sign In
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[21.4px] left-[535.6px] w-[70.5px] h-[21.1px]">
              <div className="absolute top-[0px] left-[0px] rounded-[23.49px] box-border w-[70.5px] h-[21.1px] border-[0.5px] border-solid border-crimson" />
              <div className="absolute top-[6.1px] left-[21.1px] text-5xs-5 font-medium font-rubik text-crimson text-left inline-block w-[28.2px] h-[8.9px]">
                Sign Up
              </div>
            </button>
            <div className="absolute top-[97.1px] left-[70.5px] text-[23.5px] leading-[32.89px] text-gray-100 inline-block w-[260.8px] h-[65.8px]">
              <span className="font-medium">Want anything to be easy with</span>
              <b> LaslesVPN.</b>
            </div>
            <div className="absolute top-[172.3px] left-[70.5px] leading-[14.09px] inline-block w-[260.8px] h-[28.2px]">
              <span>{`Provide a network for all your needs with ease and fun using `}</span>
              <span className="font-medium">{`LaslesVPN `}</span>
              <span>discover interesting features from us.</span>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[224px] left-[70.5px] w-[117.5px] h-[40.1px]">
              <div className="absolute top-[11.9px] left-[9px] rounded-8xs-7 bg-tomato-300 [filter:blur(25.37px)] w-[99.5px] h-[28.2px]" />
              <div className="absolute top-[0px] left-[0px] rounded-8xs-7 bg-tomato-100 w-[117.5px] h-[28.2px]" />
              <b className="absolute top-[8.2px] left-[36.4px] text-5xs-5 leading-[11.75px] inline-block font-rubik text-white text-left w-[44.6px] h-[11.7px]">
                Get Started
              </b>
            </button>
            <div className="absolute top-[343.9px] left-[338.3px] w-[42.8px] h-[30.5px] text-3xs-4">
              <div className="absolute top-[0px] left-[0px] w-[42.8px] h-[30.5px]">
                <div className="absolute top-[16.4px] left-[0px] leading-[14.09px] inline-block w-[42.8px] h-[14.1px]">
                  Locations
                </div>
                <b className="absolute top-[0px] left-[0px] text-xs-7 leading-[14.09px] inline-block text-gray-100 w-[23px] h-[14.1px]">
                  30+
                </b>
              </div>
            </div>
            <div className="absolute top-[343.9px] left-[156.2px] w-[24.9px] h-[30.5px] text-3xs-4">
              <div className="absolute top-[16.4px] left-[0px] leading-[14.09px] inline-block w-[24.9px] h-[14.1px]">
                Users
              </div>
              <b className="absolute top-[0px] left-[0px] text-xs-7 leading-[14.09px] inline-block text-gray-100 w-[23px] h-[14.1px]">
                90+
              </b>
            </div>
            <div className="absolute top-[343.9px] left-[530.2px] w-[33.4px] h-[30.5px] text-3xs-4">
              <div className="absolute top-[0px] left-[0px] w-[33.4px] h-[30.5px]">
                <div className="absolute top-[16.4px] left-[0px] leading-[14.09px] inline-block w-[33.4px] h-[14.1px]">
                  Servers
                </div>
                <b className="absolute top-[0px] left-[0px] text-xs-7 leading-[14.09px] inline-block text-gray-100 w-[23px] h-[14.1px]">
                  50+
                </b>
              </div>
            </div>
            <img
              className="absolute top-[329.7px] left-[242.2px] max-w-full overflow-hidden h-[59px] object-cover"
              alt=""
              src="/vector-14@2x.png"
            />
            <img
              className="absolute top-[329.7px] left-[444.2px] max-w-full overflow-hidden h-[59px] object-cover"
              alt=""
              src="/vector-15@2x.png"
            />
            <div className="absolute top-[346.3px] left-[295.3px] w-[25.8px] h-[25.8px]">
              <div className="absolute top-[0px] left-[0px] rounded-[32.89px] bg-lavenderblush w-[25.8px] h-[25.8px]" />
              <img
                className="absolute top-[7.3px] left-[7.3px] w-[11.3px] h-[11.3px] object-cover"
                alt=""
                src="/group-1215@2x.png"
              />
            </div>
            <div className="absolute top-[346.3px] left-[113.2px] w-[25.8px] h-[25.8px]">
              <div className="absolute top-[0px] left-[0px] rounded-[32.89px] bg-lavenderblush w-[25.8px] h-[25.8px]" />
              <img
                className="absolute top-[7.3px] left-[7.3px] w-[11.3px] h-[11.3px] object-cover"
                alt=""
                src="/group-1216@2x.png"
              />
            </div>
            <img
              className="absolute top-[346.3px] left-[487.2px] w-[25.8px] h-[25.8px]"
              alt=""
              src="/iconserver.svg"
            />
            <div className="absolute top-[992.1px] left-[115px] w-[89.4px] h-[70.5px] text-6xs-6">
              <div className="absolute top-[18.8px] left-[0px] w-[89.4px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.8px] leading-[14.09px] inline-block w-[68.6px] h-[14.1px]">
                  Encrypted Connection
                </div>
                <img
                  className="absolute h-[80.14%] w-[12.64%] top-[9.93%] right-[87.36%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute h-1/5 w-[73.04%] top-[53.33%] right-[26.85%] bottom-[26.67%] left-[0.11%]">
                <img
                  className="absolute h-[80.14%] w-[17.3%] top-[9.93%] right-[82.7%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
                <div className="absolute top-[0px] left-[20.7px] leading-[14.09px] inline-block w-[44.6px] h-[14.1px]">
                  No Traffic Logs
                </div>
              </div>
              <div className="absolute h-1/5 w-[92.62%] top-[80%] right-[7.38%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-[80.14%] w-[13.65%] top-[9.93%] right-[86.35%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
                <div className="absolute top-[0px] left-[20.8px] leading-[14.09px] inline-block w-[62px] h-[14.1px]">
                  Works on All Devices
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[84.6px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.8px] leading-[14.09px] inline-block w-[63.9px] h-[14.1px]">
                  Unlimited Bandwitch
                </div>
                <img
                  className="absolute top-[1.4px] left-[0px] w-[11.3px] h-[11.3px]"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
            </div>
            <div className="absolute top-[992.1px] left-[293.5px] w-[89.5px] h-[89.3px] text-6xs-6">
              <div className="absolute top-[18.8px] left-[0.2px] w-[89.4px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.8px] leading-[14.09px] inline-block w-[68.6px] h-[14.1px]">
                  Encrypted Connection
                </div>
                <img
                  className="absolute h-[80.14%] w-[12.64%] top-[9.93%] right-[87.36%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[37.6px] left-[0px] w-[67.9px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.9px] leading-[14.09px] inline-block w-[47px] h-[14.1px]">
                  Yes Traffic Logs
                </div>
                <img
                  className="absolute h-[80.14%] w-[16.64%] top-[9.93%] right-[83.36%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[56.4px] left-[0px] w-[82.9px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.9px] leading-[14.09px] inline-block w-[62px] h-[14.1px]">
                  Works on All Devices
                </div>
                <img
                  className="absolute h-[80.14%] w-[13.63%] top-[9.93%] right-[86.37%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[75.2px] left-[0.3px] w-[75.2px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.7px] leading-[14.09px] inline-block w-[54.5px] h-[14.1px]">
                  Connect Anyware
                </div>
                <img
                  className="absolute h-[80.14%] w-[15.03%] top-[9.93%] right-[84.97%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[0.1px]">
                <Button
                  sx={{ width: 84.7 }}
                  id="button-Unlimited Bandwitch"
                  aria-controls="menu-Unlimited Bandwitch"
                  aria-haspopup="true"
                  aria-expanded={groupDropdown4Open ? "true" : undefined}
                  onClick={handleGroupDropdown4Click}
                  color="primary"
                >
                  
                </Button>
                <Menu
                  anchorEl={groupDropdown4AnchorEl}
                  open={groupDropdown4Open}
                  onClose={handleGroupDropdown4Close}
                />
              </div>
            </div>
            <div className="absolute top-[992.1px] left-[472px] w-[89.5px] h-[108.1px] text-6xs-6">
              <div className="absolute top-[18.8px] left-[0.2px] w-[89.4px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.8px] leading-[14.09px] inline-block w-[68.6px] h-[14.1px]">
                  Encrypted Connection
                </div>
                <img
                  className="absolute h-[80.14%] w-[12.64%] top-[9.93%] right-[87.36%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[37.6px] left-[0px] w-[67.9px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.9px] leading-[14.09px] inline-block w-[47px] h-[14.1px]">
                  Yes Traffic Logs
                </div>
                <img
                  className="absolute h-[80.14%] w-[16.64%] top-[9.93%] right-[83.36%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[56.4px] left-[0px] w-[82.9px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.9px] leading-[14.09px] inline-block w-[62px] h-[14.1px]">
                  Works on All Devices
                </div>
                <img
                  className="absolute h-[80.14%] w-[13.63%] top-[9.93%] right-[86.37%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[75.2px] left-[0.3px] w-[75.2px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.7px] leading-[14.09px] inline-block w-[54.5px] h-[14.1px]">
                  Connect Anyware
                </div>
                <img
                  className="absolute h-[80.14%] w-[15.03%] top-[9.93%] right-[84.97%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[94px] left-[0.3px] w-[75.2px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.7px] leading-[14.09px] inline-block w-[54.5px] h-[14.1px]">
                  Get New Features
                </div>
                <img
                  className="absolute h-[80.14%] w-[15.03%] top-[9.93%] right-[84.97%] bottom-[9.93%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[0.1px] w-[84.7px] h-[14.1px]">
                <div className="absolute top-[0px] left-[20.8px] leading-[14.09px] inline-block w-[63.9px] h-[14.1px]">
                  Unlimited Bandwitch
                </div>
                <img
                  className="absolute top-[1.4px] left-[0px] w-[11.3px] h-[11.3px]"
                  alt=""
                  src="/group-1223.svg"
                />
              </div>
            </div>
            <img
              className="absolute top-[84.2px] left-[350.4px] w-[287.2px] h-[179.7px] object-contain"
              alt=""
              src="/illustration-1@2x.png"
            />
            <img
              className="absolute top-[872.1px] left-[304.2px] w-[68.1px] h-[77.7px] object-contain"
              alt=""
              src="/illustrationstandard@2x.png"
            />
            <img
              className="absolute top-[872.1px] left-[125.7px] w-[68.1px] h-[77.7px] object-contain"
              alt=""
              src="/illustrationfree@2x.png"
            />
            <img
              className="absolute top-[872.1px] left-[482.8px] w-[68.1px] h-[77.7px] object-contain"
              alt=""
              src="/illustrationpremium@2x.png"
            />
            <img
              className="absolute top-[451.2px] left-[86.7px] w-[238.7px] h-[194.8px] object-contain"
              alt=""
              src="/illustration-2@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-[26.71px] shadow-[0px_3.6px_48.09px_rgba(22,_36,_53,_0.1)] box-border w-[676.5px] h-[1147.1px] border-[8.9px] border-solid border-white" />
        </div>
      </header>
      <div className="absolute top-[337px] left-[160px] w-[554px] h-[406px]">
        <div className="absolute top-[0px] left-[0px] w-[322.3px] h-[105.3px]">
          <div className="absolute top-[0px] left-[0px] w-[322.3px] h-[105.3px]">
            <div className="absolute top-[49.5px] left-[30.1px] bg-darkslateblue [filter:blur(84px)] w-[262px] h-[83.4px] hidden" />
            <div className="absolute top-[0px] left-[0px] w-[322.3px] h-[105.3px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[144.77px] w-[322.3px] h-[105.3px]"
                alt=""
                src="/rectangle-331.svg"
              />
              <b className="absolute top-[32.9px] left-[117px] leading-[39.48px] flex items-center w-[139.5px] h-[39.5px]">
                Freebie.
              </b>
              <div className="absolute top-[15.4px] left-[16.3px] rounded-[50%] box-border w-[74.4px] h-[74.4px] border-[1.3px] border-solid border-whitesmoke-200" />
              <img
                className="absolute top-[36.4px] left-[29.9px] w-[45.2px] h-[33.9px] object-cover"
                alt=""
                src="/image-32@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[146px] left-[10px] text-[90px] leading-[130px] flex items-center w-[544px] text-lightsteelblue">
          <span className="w-full">
            <span>Landingpage</span>
            <span className="text-gray-100">
              <span className="font-medium font-rubik">{` `}</span>
              <span className="font-semibold">LaslesVPN</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cover;
