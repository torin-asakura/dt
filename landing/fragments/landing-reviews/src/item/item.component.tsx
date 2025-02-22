import React            from 'react'
import { FC }           from 'react'

import { PlusIcon }     from '@ui/icons'
import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Text }         from '@ui/text'
import { TextEllipsis } from '@ui/text'

import { ItemProps }    from './item.interface'
import { formatString } from '../helpers'
import { messages }     from './messages'

const Item: FC<ItemProps> = ({ review, language, onClick }) => (
  <Box
    width={[300, 405, 405]}
    height={276}
    backgroundColor='white'
    borderRadius='normal'
    overflow='hidden'
    padding='24px'
    // @ts-ignore
    cursor='pointer'
    onClick={onClick}
  >
    <Column>
      <Layout>
        <Text fontWeight='slim' fontSize='large' color='text.black'>
          {formatString(review.title)}
        </Text>
      </Layout>
      <Layout flexBasis={4} />
      <Layout>
        <Text fontSize='regular' color='text.lightGray'>
          {formatString(review.customerReview.respondent)}
        </Text>
      </Layout>
      <Layout flexGrow={1} />
      <Layout overflow='hidden'>
        <TextEllipsis fontSize='regular' color='text.gray' lineClamp={4}>
          {formatString(review.content)}
        </TextEllipsis>
      </Layout>
      <Layout flexGrow={1} />
      <Layout alignItems='center'>
        <PlusIcon />
        <Layout flexBasis={8} />
        <Text color='text.accent' fontSize='regular'>
          {messages.details[language]}
        </Text>
      </Layout>
    </Column>
  </Box>
)
export { Item }
