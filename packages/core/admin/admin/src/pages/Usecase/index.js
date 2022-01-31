import React, { useState } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { pxToRem } from '@strapi/helper-plugin';
import { Main } from '@strapi/design-system/Main';
import { Flex } from '@strapi/design-system/Flex';
import { Box } from '@strapi/design-system/Box';
import { Stack } from '@strapi/design-system/Stack';
import { Typography } from '@strapi/design-system/Typography';
import { Select, Option } from '@strapi/design-system/Select';
import { TextInput } from '@strapi/design-system/TextInput';
import { Button } from '@strapi/design-system/Button';
import { Link } from '@strapi/design-system/Link';
import Logo from '../AuthPage/components/Logo';
import UnauthenticatedLayout, { LayoutContent } from '../../layouts/UnauthenticatedLayout';

const options = [
  'Front-end developer',
  'Back-end developer',
  'Full-stack developer',
  'Content Manager',
  'Content Creator',
  'Other',
];

const TypographyCenter = styled(Typography)`
  text-align: center;
`;

const Usecase = () => {
  const { formatMessage } = useIntl();
  const [workType, setWorkType] = useState();
  const [otherValue, setOtherValue] = useState();

  const isOther = workType === 'Other';

  return (
    <UnauthenticatedLayout>
      <Main>
        <LayoutContent>
          <Flex direction="column" paddingBottom={7}>
            <Logo />
            <Box paddingTop={6} paddingBottom={1} width={pxToRem(250)}>
              <TypographyCenter variant="alpha" as="h1">
                {formatMessage({
                  id: 'Usecase.title',
                  defaultMessage: 'Tell us a bit more about yourself?',
                })}
              </TypographyCenter>
            </Box>
          </Flex>
          <Stack size={6}>
            <Select
              id="usecase"
              label={formatMessage({
                id: 'Usecase.input.work-type',
                defaultMessage: 'What type of work do you do?',
              })}
              onClear={() => setWorkType(null)}
              clearLabel={formatMessage({ id: 'clearLabel', defaultMessage: 'Clear' })}
              onChange={setWorkType}
              value={workType}
            >
              {options.map(option => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
            {isOther && (
              <TextInput
                name="other"
                label={formatMessage({ id: 'Usecase.input.other', defaultMessage: 'Other' })}
                value={otherValue}
                onChange={e => setOtherValue(e.target.value)}
              />
            )}
            <Button fullWidth size="L">
              Finish
            </Button>
          </Stack>
        </LayoutContent>
        <Flex justifyContent="center">
          <Box paddingTop={4}>
            <Link to="/">
              {formatMessage({
                id: 'Usecase.button.skip',
                defaultMessage: 'Skip this question',
              })}
            </Link>
          </Box>
        </Flex>
      </Main>
    </UnauthenticatedLayout>
  );
};

export default Usecase;