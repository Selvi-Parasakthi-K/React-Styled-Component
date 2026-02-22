import { Card, Avatar, Button, PageWrapper } from "./Styled";

type Props = {
  name: string;
  role: string;
  bg: string;
  textColor: string;
  radius: number;
  shadow: boolean;
  shape: string;
  image: string;
};

export default function ProfileCard(props: Props) {
  return (
    <PageWrapper>
      <Card {...props}>
        <Avatar shape={props.shape} image={props.image} />
        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <Button>View Profile</Button>
      </Card>
    </PageWrapper>
  );
}
