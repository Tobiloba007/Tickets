import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";

export default function BlogCard() {
  return (
    <Card shadow="sm" className="bg-white" padding="lg" radius="md">
      <Card.Section className=" relative min-h-[15.75rem] min-w-[13.875rem] py-2 px-3 ">
        <Image
          className="min-h-[15.75rem] min-w-[13.875rem]"
          radius="md"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={252}
          alt="Norway"
        />
        <Box className="flex items-center justify-center  rounded-2xl h-7 w-20 px-1 bg-[#EDF8EC] lg:px-3  top-10 left-[60%] absolute">
          <p className="text-[11px] text-success font-medium md:text-xs">
            Published
          </p>
        </Box>
      </Card.Section>

      <Box className="text-center">
        <Text fw={500} className="text-neutral ">
          How to create your event on Umscope
        </Text>
      </Box>
      <Box className="flex gap-x-3 justify-center items-center w-full mt-4">
        <Image className="w-7 h-7 rounded-full" src="/img/69.svg" />{" "}
        <Text className="text-purple font-medium"> Oluwatobi Joseph</Text>
      </Box>

      <Box className="flex gap-x-3 justify-center items-center w-full mt-4">
        <Box className="rounded bg-neutral-50 ">
          <Image
            h={41}
            w={42}
            className="h-10 w-10 cursor-pointer hover:scale-110 transition-all"
            src="/img/icons/delete.svg"
          />
        </Box>

        <Box className=" rounded bg-neutral-50  ">
          <Image
            className=" h-6 w-4 cursor-pointer hover:scale-110 transition-all"
            src="/img/icons/edit.svg"
          />
        </Box>
      </Box>

      
    </Card>
  );
}
