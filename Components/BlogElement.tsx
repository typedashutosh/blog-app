import Link from 'next/link'
import { FC } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

export interface IBlogElement {
  blog: {
    fields: {
      title: string
      description: string
      headerImage: {
        fields: {
          description: string
          file: {
            details: {
              image: {
                height: number
                width: number
              }
            }
            fileName: string
            url: string
          }
        }
      }
    }
    metadata: {
      tags: []
    }
    sys: {
      id: string
      createdAt: string
    }
  }
}

const BlogElement: FC<IBlogElement> = ({ blog }) => {
  return (
    <Card>
      <CardMedia
        image={blog.fields.headerImage.fields.file.url}
        title={blog.fields.headerImage.fields.description}
      />
      <div>
        <CardContent>
          <Typography component='h5'>{blog.fields.title}</Typography>
          <Typography component='body'>{blog.fields.description}</Typography>
        </CardContent>
      </div>
    </Card>
  )
}

export default BlogElement
