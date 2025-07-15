import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  width: 100%;
`;

// Hero 섹션의 높이 계산 방식을 변경합니다.
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); /* 최소 높이로 설정하여 내용이 많아져도 대응 가능하게 */
  padding: 50px 20px; /* 상하 패딩을 충분히 줌 */
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: -1px;
  margin-bottom: 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out 0.5s;
  animation-fill-mode: backwards;
`;

const CtaButton = styled(Link)`
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #F5F5DC;
  background-color: #36454F;
  border-radius: 5px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out 1s;
  animation-fill-mode: backwards;
  &:hover {
    background-color: #000;
    transform: translateY(-3px);
  }
`;

const FeatureSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  ${props => props.isVisible && css`
    opacity: 1;
    transform: translateY(0);
  `}
`;

const SectionTitle = styled.h2`
  font-family: "Georgia", "Times New Roman", serif;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const FeatureItem = styled.div`
  text-align: left;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
`;

function HomePage() {
  const [featureRef, isFeatureVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <PageWrapper>
      <HeroSection>
        <Title>The Teconnect Chronicle</Title>
        <Subtitle>
          기술은 시대를 기록하고, 혁신은 미래를 조망합니다.
          Teconnect는 가장 진보된 기술로 당신의 내일을 만듭니다.
        </Subtitle>
        <CtaButton to="/products">모든 제품 라인업 보기</CtaButton>
      </HeroSection>

      <FeatureSection ref={featureRef} isVisible={isFeatureVisible}>
        <SectionTitle>Our Core Values</SectionTitle>
        <FeatureGrid>
          <FeatureItem>
            <FeatureTitle>Innovation</FeatureTitle>
            <FeatureDescription>
              우리는 현실에 안주하지 않습니다. 끊임없는 연구와 개발을 통해 기존의 한계를 넘어서는 혁신적인 기술을 선보이며 시장을 선도합니다.
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Reliability</FeatureTitle>
            <FeatureDescription>
              가장 중요한 것은 신뢰입니다. 모든 제품은 수많은 테스트를 거쳐 어떤 환경에서도 안정적으로 작동하도록 설계되었습니다. Teconnect의 기술은 당신의 비즈니스를 멈추지 않습니다.
            </FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Connectivity</FeatureTitle>
            <FeatureDescription>
              단순한 디스플레이를 넘어, 사람과 사람, 아이디어와 아이디어를 연결하는 허브가 되는 것을 목표로 합니다. 우리의 기술로 더 나은 소통과 협업을 경험하세요.
            </FeatureDescription>
          </FeatureItem>
        </FeatureGrid>
      </FeatureSection>
    </PageWrapper>
  );
}

export default HomePage;