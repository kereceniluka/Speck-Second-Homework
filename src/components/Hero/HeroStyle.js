import styled from 'styled-components';

export const SectionHero = styled.section `
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${props => props.eventImg}) rgba(0, 0, 0, 0.69) no-repeat fixed center;
    background-size: cover;
    background-blend-mode: multiply;
`;

export const SectionHeroContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 280px;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 25px;
`;

export const SectionHeroTitle = styled.h1 `
    text-align: center;
    font-size: 30px;
    color: #fff;
`;

export const SectionHeroOrganizer = styled.span `
    text-align: center;
    font-size: 30px;
    color: #c59613;
`;

export const SectionHeroDate = styled.p `
    text-align: center;
    font-size: 25px;
    color: #fff;
`;