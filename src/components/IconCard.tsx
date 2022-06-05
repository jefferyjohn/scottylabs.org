import { Card, styled, Stack } from "@mui/material";


const StyledCard = styled(Card)({
	backgroundColor: "#F5F5F5",
	textAlign: "left",
	borderRadius: 10,
});

export default function IconCard(props: {icon : string, text : string }) {
	return (
		<>
			<StyledCard className="IconCard">
				<Stack direction="row" spacing={1}>
					<img src={props.icon} width="32" />
					<div className='Center'>
						<span>{props.text}</span>
					</div>
				</Stack>
			</StyledCard>
		</>
	);
}