import React, { useContext, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  WrapItem,
  Wrap,
  Badge,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NewsContext } from "../../../components/NewsListPublic/NewsContext";

export const News = () => {
  const { news, getNews } = useContext(NewsContext);
  const last4news = news.length > 0 ? news.slice(news.length - 4) : "error";

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Center>
        <Box>
          <Text fontSize={["xl", "3xl", "5xl"]} fontFamily={"truculenta"}>
            Ultimas Novedades
          </Text>
        </Box>
        <br />
      </Center>
      <SimpleGrid minChildWidth="400px" mb={10}>
        <Center>
          <Wrap spacing={3}>
            {last4news !== "error" ? (
              last4news.map((item) => (
                <Link to={`/novedades/${item.id}`} key={item.id}>
                  <WrapItem borderRadius="lg">
                    <Box
                      boxShadow={"xl"}
                      className="container"
                      maxW="xs"
                      overflow="hidden"
                      borderWidth="1px"
                      borderRadius="lg"
                    >
                      <div className="card-image">
                        <Image src={item.image} h="200px" />
                      </div>
                      <Box p={2}>
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          {item.category.name}
                        </Badge>
                      </Box>
                      <Box
                        bg="white"
                        p={4}
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                      >
                        <div className="card-title">
                          <Text as="samp" fontSize="xl">
                            {item.name}
                          </Text>
                        </div>
                      </Box>
                    </Box>
                  </WrapItem>
                </Link>
              ))
            ) : (
              <Text fontSize={["xl", "2xl", "3xl"]}>
                Sin datos de novedades.
              </Text>
            )}
          </Wrap>
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default News;
