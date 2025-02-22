import React         from 'react'
import { FC }        from 'react'

import { Image }     from '@ui/image'
import { Box }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interface'
import { messages }  from './messages'

const Item: FC<ItemProps> = ({ recruit, image, language }) => (
  <Box height={[240, 240, 380]} width='100%' itemScope itemType='https://schema.org/Person'>
    <Column width='100%'>
      <Row justifyContent='center'>
        <Box borderRadius='100%' width={[160, 160, 280]} height={[160, 160, 280]} overflow='hidden'>
          <Image width={280} height={280} alt={image.node.title} src={image.node.mediaItemUrl} />
        </Box>
      </Row>
      <Layout flexBasis={[24, 24, 32]} />
      <Row justifyContent='center'>
        <Text fontSize='large' color='text.black' fontWeight='slim' itemProp='givenName'>
          {recruit}
        </Text>
      </Row>
      <Layout flexBasis={[8, 8, 12]} />
      <Row justifyContent='center'>
        <Text color='text.lightGray' fontSize='regular' itemProp='jobTitle'>
          {messages.itRecruiter[language]}
        </Text>
      </Row>
    </Column>
  </Box>
)

export { Item }
