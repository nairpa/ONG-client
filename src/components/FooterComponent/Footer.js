// imports from react.
import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// imports externals libraries.
import { Flex, Box, Button, Center, Text, Image } from "@chakra-ui/react";

// import logo of the ong.
import logo from "../../assets/img/logo-somos-mas-blanco.png";
import { ONG_COLORS } from "../../consts/const";

const Footer = () => {
  const { facebook, instagram, linkedin } = useSelector((state) => state.home);

  return (
    <Flex
      w="100%"
      h={["80vh", "60vh", "40vh", "40vh"]}
      flexDirection="column"
      alignItems="center"
      bgColor="#222"
    >
      <Box flexDirection="column" w={["100%", "85%"]} height="70%">
        <Center
          flexDirection="column"
          borderBottom="1px"
          borderBottomColor="grey"
          h="100%"
        >
          <Flex
            w="100%"
            direction="row"
            h={["75%", "60%", "40%", "30%"]}
            justifyContent="space-between"
          >
            <Flex direction={["column", "column", "column", "row"]}>
              <Link to="/">
                <Button
                  color="#fff"
                  margin={2}
                  variant="ghost"
                  fontFamily={"truculenta"}
                  fontSize={["18px"]}
                  _hover={{
                    bgColor: ONG_COLORS.YELLOW,
                    transform: "scale(1.05)",
                    color: "#000",
                  }}
                >
                  Inicio
                </Button>
              </Link>

              <Link to="/actividades">
                <Button
                  color="#fff"
                  margin={2}
                  variant="ghost"
                  fontFamily={"truculenta"}
                  fontSize={["18px"]}
                  _hover={{
                    bgColor: ONG_COLORS.YELLOW,
                    transform: "scale(1.05)",
                    color: "#000",
                  }}
                >
                  Actividades
                </Button>
              </Link>

              <Link to="/novedades">
                <Button
                  color="#fff"
                  margin={2}
                  variant="ghost"
                  fontFamily={"truculenta"}
                  fontSize={["18px"]}
                  _hover={{
                    bgColor: ONG_COLORS.YELLOW,
                    transform: "scale(1.05)",
                    color: "#000",
                  }}
                >
                  Novedades
                </Button>
              </Link>
            </Flex>

            <Flex>
              <Link to="/">
                <Image src={logo} alt="logo somos más" objectFit="cover" />
              </Link>
            </Flex>

            <Flex direction={["column", "column", "column", "row"]}>
              <Link to="/about-us">
                <Button
                  color="#fff"
                  margin={2}
                  variant="ghost"
                  fontFamily={"truculenta"}
                  fontSize={["18px"]}
                  _hover={{
                    bgColor: ONG_COLORS.YELLOW,
                    transform: "scale(1.05)",
                    color: "#000",
                  }}
                >
                  Nosotros
                </Button>
              </Link>

              <Link to="/testimonios">
                <Button
                  color="#fff"
                  margin={2}
                  variant=""
                  fontFamily={"truculenta"}
                  fontSize={["18px"]}
                  _hover={{
                    bgColor: ONG_COLORS.YELLOW,
                    transform: "scale(1.05)",
                    color: "#000",
                  }}
                >
                  Testimonios
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  color="#fff"
                  margin={2}
                  variant="ghost"
                  fontFamily={"truculenta"}
                  fontSize={["18px"]}
                  _hover={{
                    bgColor: ONG_COLORS.YELLOW,
                    transform: "scale(1.05)",
                    color: "#000",
                  }}
                >
                  Contacto
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Center>
      </Box>

      <Box alignItems="center" w="85%" height="45%">
        <Center
          marginTop={["1rem", "1rem", "1rem", "2rem"]}
          h="70%"
          flexDirection="column"
        >
          <Center>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <Button
                borderRadius="100"
                margin={3}
                _hover={{
                  bgColor: ONG_COLORS.YELLOW,
                  transform: "scale(1.05)",
                  color: ONG_COLORS.BLUE,
                }}
              >
                <i className="fab fa-facebook" />
              </Button>
            </a>

            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Button
                borderRadius="100"
                margin={3}
                _hover={{
                  bgColor: ONG_COLORS.YELLOW,
                  transform: "scale(1.05)",
                  color: ONG_COLORS.BLUE,
                }}
              >
                <i className="fab fa-instagram" />
              </Button>
            </a>

            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                borderRadius="100"
                margin={3}
                _hover={{
                  bgColor: ONG_COLORS.YELLOW,
                  transform: "scale(1.05)",
                  color: ONG_COLORS.BLUE,
                }}
              >
                <i className="fab fa-linkedin-in"></i>
              </Button>
            </a>
          </Center>

          <Center marginTop={["1rem", "1rem", "1rem", "2rem"]}>
            <Text color="grey" fontFamily={"truculenta"} fontSize={["18px"]}>
              2021 by Alkemy All Rights Reserved
            </Text>
          </Center>
        </Center>
      </Box>
    </Flex>
  );
};

export default memo(Footer);
