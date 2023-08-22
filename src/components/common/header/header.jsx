import  logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useLocation } from 'react-router-dom';

const Header = () => {
	const vHeader = {
		logo: { id: 1, name: "Логотип Escape Room", imgSrc: logo },
		phone: { id: 2, name: '8 (800) 333-55-99', hrefNumber: "tel:88003335599" },
		nav: {
			id: 3, name: 'HeaderList',
			list:
				[
					{ id: 1, name: 'Квесты', currentPath: '/' },
					{ id: 2, name: 'Новичкам', currentPath: '/newcomers' },
					{ id: 3, name: 'Отзывы', currentPath: '/reviews' },
					{ id: 4, name: 'Акции', currentPath: '/stocks' },
					{ id: 5, name: 'Контакты', currentPath: '/contacts' },
				]
		}
	}


	const location = useLocation();
	return (
		<S.StyledHeader>
			<S.HeaderWrapper>
				<S.Logo>
					<S.Image src={vHeader.logo.imgSrc} alt={vHeader.logo.name} width="134" height="50" />
				</S.Logo>

				<S.Navigation>
					<S.Links>
						{vHeader.nav.list.map((el) => {
							return (
								<S.LinkItem>
									<S.Link $isActiveLink={location.pathname === `${el.currentPath}`} to={`${el.currentPath}`} >	{el.name}	</S.Link>
								</S.LinkItem>
							)
						})}
					</S.Links>
				</S.Navigation>
				<S.Phone href={vHeader.phone.href}>{vHeader.phone.name}</S.Phone>
			</S.HeaderWrapper>
		</S.StyledHeader >
	)
};

export default Header;
