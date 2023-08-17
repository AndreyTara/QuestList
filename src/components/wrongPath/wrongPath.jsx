import {
	MainLayout,
	PageTitle,
	PageHeading,
	PageSubtext,
} from 'components/common/common';
import * as S from './wrongPath.styled';

const WrongPath = () => (
	<MainLayout>
		<S.Main forwardedAs="main">
			<PageHeading>
				<PageTitle>Помилка 404</PageTitle>
				<PageSubtext>Сторіну не знайдено</PageSubtext>
			</PageHeading>
		</S.Main>
	</MainLayout>
);

export default WrongPath;