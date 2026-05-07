 import { Card, Image ,CloseButton , Text, Button, Group } from '@mantine/core';
 import "./Card.css";
 const CardComponent = ({title, par, i, click}) => {
    console.log(i);
    return  (   
        <Card  shadow="sm"
  padding="lg"
  radius="md"
  withBorder
  style={{ width: 200 }}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        {/* <Badge color="pink">On Sale</Badge> */}
        <CloseButton 
        aria-label="Close modal" 
        onClick={click} />

      </Group>

      <Text size="sm" c="dimmed">
       {par}
      </Text>

      <Button color="blue" fullWidth mt="md">
        Book classic tour now
      </Button>
    </Card>
  );
 }

 export default CardComponent;