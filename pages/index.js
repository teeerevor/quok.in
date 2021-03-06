import styled from 'styled-components';
import { Link } from 'rebass/styled-components';
import Grid from '~/components/grid';
import Card from '~/components/card';
import DisplayLink from '~/components/displayLink';
import { quokkaUrl } from '~/utils/urlHelpers';
import homeQuokkas from '~/data/homeQuokkas';
import ImageItem from '~/components/imageItem';
import Head from '~/components/head';

const InfoPanel = styled.div`
    background: white;
    padding-top: var(--size7);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home = styled.div`
    position: relative;
`;

const Cell = styled.td`
    padding: var(--size7);
    text-align: ${({ right }) => (right ? 'right' : 'center')};
`;

const Example = ({ url, heading, meet }) => (
    <tr>
        <Cell right>
            <img src={url} alt={`${heading} Quokka`} loading="lazy" />
        </Cell>
        <Cell>
            <h4>{heading}</h4>
            <DisplayLink href={url}>{url}</DisplayLink>
            {meet && (
                <Link variant="block" mt="6" href="/meet-the-quokkas">
                    Meet the Quokkas
                </Link>
            )}
        </Cell>
    </tr>
);

const HomePage = () => (
    <>
        <Head />
        <Home>
            <Grid>
                <Card>
                    <h1>Quokkas</h1>
                    <p>All shapes and sizes</p>
                    <DisplayLink href={quokkaUrl({ width: 200, height: 300 })}>https://quok.in/200/300</DisplayLink>
                    <Link variant="block" mt="7" href="/meet-the-quokkas">
                        Meet the Quokkas
                    </Link>
                </Card>
                {homeQuokkas.map((quokka) => (
                    <ImageItem key={Math.random() * 1000} {...quokka} />
                ))}
            </Grid>
            <InfoPanel>
                <h2>Options</h2>
                <table>
                    <tbody>
                        <Example heading="Square" url={quokkaUrl({ width: 233 })} />
                        <Example heading="Rectangular" url={quokkaUrl({ width: 377, height: 233 })} />
                        <Example heading="Grey" url={quokkaUrl({ width: 233, g: true })} />
                        <Example heading="Named Quokka" url={quokkaUrl({ width: 233, name: 'suzy' })} meet />
                        <Example heading="Selfies" url={quokkaUrl({ width: 233, selfies: true })} />
                        <Example heading="No Selfies thanks" url={quokkaUrl({ width: 233, noSelfies: true })} />
                    </tbody>
                </table>
            </InfoPanel>
        </Home>
    </>
);

export default HomePage;
