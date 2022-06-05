import { Card, CardMedia, CardContent, Typography, styled } from "@mui/material";
import { height } from "@mui/system";

const StyledCard = styled(Card)({
	backgroundColor: "#F5F5F5",
	textAlign: "left",
	borderRadius: 10,
});

export default function ImageCard(props: {image : string, text : string, desc : string, link : string}) {
	return (
		<>
			<StyledCard sx={{ maxWidth: 345, height: 250 }}>
				<CardMedia
					component="img"
					height="150"
					image={props.image}
					alt=""
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						<a href={props.link}>{props.text}</a>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{props.desc}
					</Typography>
				</CardContent>
			</StyledCard>
		</>
	)
}