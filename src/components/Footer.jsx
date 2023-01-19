import React from "react";
import styles from "../Footer.module.css";
import { Box, Image, Text } from "@chakra-ui/react";
import {
  AiFillApple,
  AiFillWindows,
  AiFillAndroid,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineWallet
} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
const Footer = () => {

  return (

    <Box background="#f4f4f4" border="1px solid white" w={{base: '200%', md: '180%', lg: '100%'}}>
      <Box className={styles.f1}>
        <Text fontSize={{ base: '8px', md: '10px', lg: 'xs' }} align="left">
          Cashback would be added as Paytm Cash, which is One97 Communications
          Ltd loyalty program. It can be used to pay for goods & services sold
          by merchants that accept ‘Pay with Paytm’
        </Text>
      </Box>
      {/* ====================================ICONS PART =================================== */}
      <Box className={styles.f2}>
        <Box className={styles.options}>
          <a href="">About Us</a>
          <a href="">Partner with us</a>
          <a href="">Terms & Conditions</a>
          <a href="">Blog</a>
          <a href="">Media</a>
          <a href="">24x7 Help</a>
          <a href="">Grievance policy</a>
          <a href="">Bug bounty</a>
          <a href="">Return/Cancellation policy</a>
        </Box>
        <Box className={styles.icons}>
          <Box>
            <AiFillApple />
          </Box>
          <Box>
            <AiFillWindows />
          </Box>
          <Box>
            <AiFillAndroid />
          </Box>
          <Box>
            <AiOutlineTwitter />
          </Box>
          <Box>
            <FaFacebookF />
          </Box>
          <Box>
            <ImInstagram />
          </Box>
          <Box>
            <AiFillYoutube />
          </Box>
        </Box>
      </Box>
      {/* ======================================LOGOS PART========================================= */}
      <Box className={styles.p_logos}>
        <Box className={styles.logos}>
          <Box>
            <Box className={styles.first}>
              <img
                src="https://www.pngmart.com/files/3/Major-Credit-Card-Logo-Transparent-Background.png"
                alt=""
              />
            </Box>
          </Box>
          <Box>
            <Box>
              <Image
                w="50px"
                src="https://paytmmall-clone.netlify.app/logo/mainLogo.png"
                alt=""
              />
              <Text fontSize="xs" mt="-15px" ml="55px">
                Seller{" "}
              </Text>
              <Text fontSize="xs" fontWeight="700">
                Become a Seller
              </Text>
            </Box>
            <Box className={styles.P_wallet}>
              <AiOutlineWallet color='#0987A0'/>
              <Text fontSize="xs" mt="-19px" ml="-10px">
                wallet{" "}
              </Text>
              <Text fontSize="xs" fontWeight="700">
                Payment services
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ================================================DROPDOWN PART==================================== */}
      <Box mt="20px" bg="white">
        <Text
          align="left"
          ml="20px"
          fontSize="1.1rem"
          fontWeight="500"
          color="#222"
        >
          From Electronics, Fashion to Cars: Buy Everything Online from the
          Convenience of Your Home from Paytm Mall
        </Text>
        <Box className={styles.bottom}>
          <Box>
            <Text textAlign="left">Electronics</Text>
            <IoMdArrowDropdown size="20px" />{" "}
          </Box>
          <Box>
            <Text textAlign="left">Mobiles</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Car & bike</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Super Market</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Women's Fashion</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Men's Fashion</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Home & Kitchen</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Baby, Kids & Toys</Text>
            <IoMdArrowDropdown size="20px" />{" "}
          </Box>
          <Box>
            <Text textAlign="left">Car & Bike Accessories</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Sports & Fitness</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Stationery</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Travel Cards</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;