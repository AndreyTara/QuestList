import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useLocation } from 'react-router-dom';


const Header = () => {
	const location = useLocation();
	return (
		<S.StyledHeader>
			<S.HeaderWrapper>
				<S.Logo>
					<S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
				</S.Logo>

				<S.Navigation>
					<S.Links>
						<S.LinkItem>
							<S.Link $isActiveLink={location.pathname === '/'} to="/" >
								Квесты
							</S.Link>
						</S.LinkItem>

						<S.LinkItem>
							<S.Link $isActiveLink={location.pathname === '/wrongPath1'} to="/wrongPath1">Новичкам</S.Link>
						</S.LinkItem>

						<S.LinkItem>
							<S.Link $isActiveLink={location.pathname === '/wrongPath2'} to="/wrongPath2">Отзывы</S.Link>
						</S.LinkItem>

						<S.LinkItem>
							<S.Link $isActiveLink={location.pathname === '/wrongPath'} to="/wrongPath">Акции</S.Link>
						</S.LinkItem>

						<S.LinkItem>
							<S.Link $isActiveLink={location.pathname === "/contacts"} to="/contacts">Контакты</S.Link>
						</S.LinkItem>
					</S.Links>
				</S.Navigation>
				<S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
			</S.HeaderWrapper>
		</S.StyledHeader>
	)
};

export default Header;
