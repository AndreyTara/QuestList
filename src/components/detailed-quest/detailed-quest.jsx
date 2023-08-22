import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { translator, firstToUpper } from 'share/utils.js';
import { vocabluary } from 'share/const.js';

const DetailedQuest = ({ previewList }) => {
	const params = useParams();
	const current = +params.id - 1;
	const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

	const onBookingBtnClick = () => {
		setIsBookingModalOpened(true);
	};

	return (
		<MainLayout>
			<S.Main>
				<S.PageImage
					src={`../${previewList[current].coverImg}`}
					alt={`Квест ${previewList[current].title}`}
					width="1366"
					height="768"
				/>
				<S.PageContentWrapper>
					<S.PageHeading>
						<S.PageTitle>{previewList[current].title}</S.PageTitle>
						<S.PageSubtitle>{firstToUpper(translator(previewList[current].type, vocabluary))}</S.PageSubtitle>
					</S.PageHeading>

					<S.PageDescription>
						<S.Features>
							<S.FeaturesItem>
								<IconClock width="20" height="20" />
								<S.FeatureTitle>{`${previewList[current].duration} мин`}</S.FeatureTitle>
							</S.FeaturesItem>
							<S.FeaturesItem>
								<IconPerson width="19" height="24" />
								<S.FeatureTitle>{`${previewList[current].peopleCount.join("-")} чел`}</S.FeatureTitle>
							</S.FeaturesItem>
							<S.FeaturesItem>
								<IconPuzzle width="24" height="24" />
								<S.FeatureTitle>{firstToUpper(translator(previewList[current].level, vocabluary))}</S.FeatureTitle>
							</S.FeaturesItem>
						</S.Features>

						<S.QuestDescription>
							{previewList[current].description}
						</S.QuestDescription>

						<S.QuestBookingBtn onClick={onBookingBtnClick}>
							Забронировать
						</S.QuestBookingBtn>
					</S.PageDescription>
				</S.PageContentWrapper>

				{isBookingModalOpened && <BookingModal />}
			</S.Main>
		</MainLayout>
	);
};

export default DetailedQuest;
