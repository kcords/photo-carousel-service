import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import PhotoGrid from '../client/src/components/PhotoGrid/PhotoGrid'

jest.mock('axios');

// const mockResult = [{
//   "_id": "600b0fb8479462e630638d7b",
//   "listingId": 30506101,
//   "photos": [
//       {
//           "room": "Entry",
//           "_id": "600b0fb8479462e630638d7c",
//           "id": 1,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=1",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=1",
//           "description": "Vel modi autem reiciendis."
//       },
//       {
//           "room": "Dining room",
//           "_id": "600b0fb8479462e630638d7d",
//           "id": 2,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=2",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=2",
//           "description": "Quae quia expedita ipsam omnis velit minima rerum."
//       },
//       {
//           "room": "Full bathroom",
//           "_id": "600b0fb8479462e630638d7e",
//           "id": 3,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=3",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=3",
//           "description": "Inventore odit culpa nesciunt cupiditate soluta nam quos sed."
//       },
//       {
//           "room": "Dining room",
//           "_id": "600b0fb8479462e630638d7f",
//           "id": 4,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=4",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=4",
//           "description": "Facilis nemo molestiae maiores sunt perspiciatis laborum explicabo sunt."
//       },
//       {
//           "room": "Dining room",
//           "_id": "600b0fb8479462e630638d80",
//           "id": 5,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=5",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=5",
//           "description": "Rerum deserunt consequatur amet deleniti."
//       },
//       {
//           "room": "Living area",
//           "_id": "600b0fb8479462e630638d81",
//           "id": 6,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=6",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=6",
//           "description": "Laudantium velit quidem."
//       },
//       {
//           "room": "Full bathroom",
//           "_id": "600b0fb8479462e630638d82",
//           "id": 7,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=7",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=7",
//           "description": "Sapiente architecto qui voluptate repudiandae quas dolorem quia dolores."
//       },
//       {
//           "room": "Bedroom Area",
//           "_id": "600b0fb8479462e630638d83",
//           "id": 8,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=8",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=8",
//           "description": "Dolorum cumque aut est quas possimus."
//       },
//       {
//           "room": "Full kitchen",
//           "_id": "600b0fb8479462e630638d84",
//           "id": 9,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=9",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=9",
//           "description": "Ratione corporis voluptatem cupiditate debitis at fugit quia."
//       },
//       {
//           "room": "Full bathroom",
//           "_id": "600b0fb8479462e630638d85",
//           "id": 10,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=10",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=10",
//           "description": "Accusantium est nulla excepturi velit."
//       },
//       {
//           "room": "Full kitchen",
//           "_id": "600b0fb8479462e630638d86",
//           "id": 11,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=11",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=11",
//           "description": "Temporibus repellendus repellat aliquam nobis quia."
//       },
//       {
//           "room": "Dining room",
//           "_id": "600b0fb8479462e630638d87",
//           "id": 12,
//           "imageUrl": "https://loremflickr.com/1200/880/houses/all?lock=12",
//           "thumbnailUrl": "https://loremflickr.com/600/450/houses/all?lock=12",
//           "description": "Velit culpa recusandae."
//       }
//   ],
//   "__v": 0
// }]

describe('PhotoGrid component', () => {
  it('should exist in the document', () => {
    render(<PhotoGrid listingId="30506101"/>);
    expect(document.querySelector('.photogrid')).toBeInTheDocument();
  })

  // it('photos buttons should render on the screen', () => {
  //   render(<PhotoGrid listingId="30506101"/>);
  //   const imgCount = screen.getAllByRole('button').length;
  //   expect(imgCount).toBeGreaterThanOrEqual(5);
  // })

  it('"Show All Photos" button should be visible', () => {
    render(<PhotoGrid listingId="30506101"/>);
    expect(screen.getByText('Show All Photos')).toBeInTheDocument();
  })

  it('"Show All Photos" button should open modal', () => {
    render(<PhotoGrid listingId="30506101"/>);
    userEvent.click(screen.getByText('Show All Photos'));
    expect(document.getElementsByClassName('modal')[0]).toHaveClass('modalopen');
  })

  // it('photo click should open modal', () => {
  //   render(<PhotoGrid listingId="30506101"/>);
  //   userEvent.click(document.querySelector('.photobtn')[0]);
  //   expect(document.getElementsByClassName('modal')[0]).toHaveClass('modalopen');
  // })

})