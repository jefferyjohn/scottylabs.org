import { Card, styled, Typography } from "@mui/material";

const StyledCard = styled(Card)({
	backgroundColor: "#F5F5F5",
	textAlign: "left",
	borderRadius: 10,
});

const CardHead = styled(Typography)({
	color: "#4D4D4D",
	padding: 0,
	fontFamily:
		'"Roboto","Droid Sans", "Helvetica Neue", sans-serif',
	fontWeight: 700,
	display: "inline-block"
});

export default function IconCard(props: { title: string, link: string }) {
	return (
		<>
			<StyledCard className="OneLineCard">
				<CardHead variant='h5'><a href={props.link}>{props.title}</a></CardHead>
			</StyledCard>
		</>
	)
}