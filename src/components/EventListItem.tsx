import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface Props {
	id: number;
}

const EventListItem: React.FunctionComponent<Props> = ({ id }: Props) => {
	const event = useSelector((state: RootState) => state.events.filter((e) => e.id == id)).at(0);

	if (event === undefined) return <span>Error: Event id:{id} not found!</span>;

	const { title, date, location, headerUrl } = event;

	return (
		<Flex gap={2} flexDirection="column" id={id.toString()}>
			<Heading fontSize="md">{title}</Heading>
			<Flex d="flex" flexDirection="row" justifyContent="space-between">
				<Flex w="35%" grow={0} alignItems={'center'}>
					<Image src={headerUrl}></Image>
				</Flex>
				<Flex h="auto" flexDirection="column" justifyContent="space-evenly">
					<Text align={'right'} fontSize={'md'} fontWeight={'semibold'} lineHeight={'shorter'}>
						{date}
						{/* watch out for where the line breakes when dynamically inserting */}
					</Text>
					<Text align={'right'} fontSize={'xs'} fontWeight={'semibold'} color="brand.200">
						{location}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default EventListItem;
