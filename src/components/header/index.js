import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import "../../App.css";
import { fetchImages, clearImages } from '../../features/images/imagesSlice';
import React, { useState, useEffect } from "react";
import unIcon from "../../icons/icon1.png";

import hemb from "../../icons/hemb.png";
import search from "../../icons/search.png";
import imgsearch from "../../icons/imgs.png";
import SubmitPhoto from "../../PopOver/SubmitPhoto.jsx";
import ExtraLink from "../../PopOver/ExtraLink";
import Recomandation from "../../PopOver/Recomandation";
import Menubar from "../Menubar";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line no-unused-vars
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const dispatch = useDispatch();
 const [searchTerm,setSearchTerm] = useState("")
 


  const handleSearch = async (event) => {
      event.preventDefault();
      

      if (searchTerm && searchTerm === '') {
          dispatch(clearImages());
      } else {
          // Reset page to 1 when a new search is performed
          dispatch(fetchImages({ searchQuery: searchTerm, page: 1 }));// Start fetching images from page 1
      }
  };

  useEffect(() => {
      dispatch(clearImages());
    }, [searchTerm, dispatch]);

  return (
    <Box width="100%" position="fixed" zIndex="20" bgColor="rgb(255,255,255)">
      <Box height="60px" width="99%">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginTop="10px"
        >
          <Box width="36px" marginLeft="25px" cursor="pointer">
            {" "}
            <Img src={unIcon} />
          </Box>
          {/* <Spacer/> */}
          <form onSubmit={handleSearch} >
          <InputGroup width="690px">
            <InputLeftElement
              //   pointerEvents='none'
              color="rgb(238,238,238)"
              className="border-ba"
              fontSize="1.2em"
              children={
                <Img
                  cursor="pointer"
                  width="18px"
                  color="lightgray"
                  src={search}
                
                />
              }
            />
          
            <Popover> &nbsp;&nbsp;
              <PopoverTrigger className="border-ba">
              
                <Input
                  // style={{marginRight:'100px'}}
                  placeholder="Search free high resolution-photos"
                  borderRadius="40px"
                  bgColor="rgb(238,238,238)"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
               
              </PopoverTrigger>

              <Recomandation />
            </Popover>
         
            <InputRightElement
              color="rgb(238,238,238)"
              fontSize="1.8em"
              className="border-ba"
              children={
                <Img
                  cursor="pointer"
                  width="18px"
                  color="lightgray"
                  src={imgsearch}
                />
              }
            />
          </InputGroup>
          </form>
          <Box cursor="pointer">
            {" "}
            <Text className="border-ba" fontSize="sm" color="rgb(128,123,158)">
          Explore
            </Text>
          </Box>
          <Box cursor="pointer">
            {" "}
            <Text className="border-ba" fontSize="sm" color="rgb(128,123,158)">
            Advertise
            </Text>
          </Box>
          <Box cursor="pointer">
            {" "}
            <Text className="border-ba" fontSize="sm" color="rgb(128, 123, 158)">
            Unsplash+
            </Text>
          </Box>
<p>|</p>
<Box cursor="pointer">
            {" "}
            <Text className="border-ba" fontSize="sm" color="rgb(128,123,158)">
            Log in
            </Text>
          </Box>
          <Box>
            <Button
              className="border-ba"
              cursor="pointer"
              color="rgb(128,123,158)"
              variant="outline"
              onClick={onOpen}
            >
              Submit a photo
            </Button>
            <SubmitPhoto
              isOpen={isOpen}
              onClose={onClose}
              onOpen={onOpen}
              scrollBehavior={scrollBehavior}
            />
          </Box>

          <Box cursor="pointer" width="25px">
            <Popover placement="bottom-end">
              <PopoverTrigger className="border-ba">
                <Img color="rgb(238,238,238)" src={hemb} />
              </PopoverTrigger>

              <ExtraLink />
            </Popover>
          </Box>
        </Flex>
      </Box>
      <Menubar />
    </Box>
  );
};

export default NavBar;