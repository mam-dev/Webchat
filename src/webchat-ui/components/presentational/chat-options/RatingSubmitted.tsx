import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@cognigy/chat-components";

const RatingSubmittedRoot = styled.div({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	padding: "20px 0",
	gap: 24,
});

// Mirrors the success toast (Notifications.tsx): green on green10 is the
// vetted contrast pairing (SC 1.4.3).
const RatingSubmittedText = styled(Typography)(({ theme }) => ({
	backgroundColor: theme.green10,
	color: theme.green,
	fontWeight: 600,
	padding: "16px 20px",
	borderRadius: 15,
}));

interface IRatingSubmittedProps {
	ratingTitleText: string;
	ratingEventBannerText?: string;
}

/**
 * Replaces the rating widget once feedback was given, so a repeat visit shows
 * the confirmation instead of a form that would allow another rating.
 */
export const RatingSubmitted = (props: IRatingSubmittedProps) => {
	const { ratingTitleText, ratingEventBannerText } = props;

	return (
		<RatingSubmittedRoot className="webchat-rating-submitted-root">
			<Typography
				variant="title1-semibold"
				className="webchat-rating-widget-title"
				margin={0}
			>
				{ratingTitleText}
			</Typography>
			<RatingSubmittedText
				variant="body-regular"
				component="p"
				margin={0}
				className="webchat-rating-submitted-text"
			>
				{ratingEventBannerText || "Your feedback was submitted"}
			</RatingSubmittedText>
		</RatingSubmittedRoot>
	);
};
