import { ScrollView, VStack, HStack, Heading, Wrap, Button } from "native-base";

export default function Search() {
  return (
    <ScrollView>
      <VStack mt={8} mr={4} ml={4} space={8}>
        <Heading>Assuntos</Heading>
        <HStack>
          <Wrap direction="row" justifyContent={"space-between"}>
            <Button
              padding={4}
              _text={{
                color: "#393939",
              }}
              bgColor="rgba(170, 144, 230, 0.15)"
              borderRadius={20}
            >
              Aqui vai ficar o texto
            </Button>
          </Wrap>
        </HStack>
      </VStack>
      <VStack mt={8} mr={4} ml={4} space={8}>
        <Heading>Tecnologias</Heading>
        <Wrap direction="row" justifyContent={"space-between"}></Wrap>
      </VStack>
      <VStack mt={8} mr={4} ml={4} space={8}>
        <Heading>Localização</Heading>
        <Wrap direction="row" justifyContent={"space-between"}></Wrap>
      </VStack>
    </ScrollView>
  );
}
