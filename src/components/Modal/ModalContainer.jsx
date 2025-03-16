import React from 'react';
import styled from 'styled-components';

function ModalContainer() {
	return (
		<Container>
			<ModalContent>
				<ModalHeader>
					<ModalTitle>Modal Title</ModalTitle>
					<ModalCloseButton>X</ModalCloseButton>
				</ModalHeader>
				<ModalBody></ModalBody>
			</ModalContent>
		</Container>
	);
}

export default ModalContainer;

const Container = styled.div``;
const ModalContent = styled.div``;
const ModalHeader = styled.div``;
const ModalTitle = styled.h1``;
const ModalCloseButton = styled.button``;
const ModalBody = styled.div``;
