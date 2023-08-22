import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { catalogListNav, vocabluary } from 'share/const.js';
import { translator,  getArrList } from 'share/utils.js';
import * as S from './quests-catalog.styled';
import { useState } from 'react'

const QuestsCatalog = ({ previewList }) => {
	const [activeBtn, setActiveBtn] = useState('0'); // Состояние активной вкладки, по умолчанию 0
	const [tData, setTData] = useState(previewList);
	const handleTabClick = (item) => {
		setActiveBtn(item);
	};

	return (
		<>
			<S.Tabs  >
				{catalogListNav.map((el, index) => (
					<S.TabItem name={el.name} key={index}>
						<S.TabBtn
							name={el.name}
							isActive={activeBtn === `${index}`}
						>
							<el.icon name={el.name}></el.icon>
							<S.TabTitle id={index} name={el.name}
								onClick={(e) => {
									const translationName = translator(`${catalogListNav[e.target.id].name}`, vocabluary);
									handleTabClick(index);
									const isAllQuests = translationName === "all quests";
									setTData(getArrList(isAllQuests, previewList, translationName));
								}}
							>
								{el.name}</S.TabTitle>
						</S.TabBtn>
					</S.TabItem>
				))}
			</S.Tabs >

			<S.QuestsList>
				{tData.map((el, index) => (
					<S.QuestItem key={index}>
						<S.QuestItemLink to={`/quests/${el.id}`} >
							<S.Quest>
								<S.QuestImage
									src={el["previewImg"]}
									width="344"
									height="232"
									alt={`квест ${el["title"]}`}
								/>

								<S.QuestContent>
									<S.QuestTitle>{el["title"]}</S.QuestTitle>
									<S.QuestFeatures>
										<S.QuestFeatureItem>
											<IconPerson />
											{`${el["peopleCount"].join('-')} чел`}
										</S.QuestFeatureItem>
										<S.QuestFeatureItem>
											<IconPuzzle />
											{translator(el.level, vocabluary)},
										</S.QuestFeatureItem>
									</S.QuestFeatures>
								</S.QuestContent>
							</S.Quest>
						</S.QuestItemLink>
					</S.QuestItem>
				))}
			</S.QuestsList >
		</>
	)
};

export default QuestsCatalog;
