import {PageAPI} from '@api';
import {PostAPI} from '@domain';

export const mockedPostResponse: PageAPI<PostAPI> = {
  meta: {
    total: 24,
    per_page: 10,
    current_page: 1,
    last_page: 3,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=3',
    next_page_url: '/?page=2',
    previous_page_url: null,
  },
  data: [
    {
      id: 5,
      text: 'Explorando os restaurantes de Melbourne',
      user_id: 5,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post5.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-12T01:31:33.233+00:00',
      updated_at: '2024-10-12T01:31:33.233+00:00',
      user: {
        id: 5,
        first_name: 'Vanessa',
        last_name: 'Isidório',
        username: 'vanessa_isidorio',
        email: 'vanessa123@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/9-vanessa.png',
        is_online: false,
        full_name: 'Vanessa Isidório',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'like',
          post_id: 5,
        },
      ],
      status: 'published',
      meta: {
        like_count: '7',
        favorite_count: '3',
        comments_count: '5',
      },
    },
    {
      id: 1,
      text: 'Bom dia!',
      user_id: 1,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-12T01:31:33.192+00:00',
      updated_at: '2024-10-12T01:31:33.217+00:00',
      user: {
        id: 1,
        first_name: 'Maria',
        last_name: 'Julia',
        username: 'mariajulia',
        email: 'mariajulia@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png',
        is_online: false,
        full_name: 'Maria Julia',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'favorite',
          post_id: 1,
        },
        {
          emoji_type: 'like',
          post_id: 1,
        },
      ],
      status: 'published',
      meta: {
        like_count: '7',
        favorite_count: '4',
        comments_count: '22',
      },
    },
    {
      id: 2,
      text: 'Vivendo no paraíso!',
      user_id: 2,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post2.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-12T00:51:33.192+00:00',
      updated_at: '2024-10-12T01:31:33.223+00:00',
      user: {
        id: 2,
        first_name: 'Tamires',
        last_name: 'Silva',
        username: 'tami_silva',
        email: 'tsilva@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/4-tamires.png',
        is_online: false,
        full_name: 'Tamires Silva',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'like',
          post_id: 2,
        },
        {
          emoji_type: 'favorite',
          post_id: 2,
        },
      ],
      status: 'published',
      meta: {
        like_count: '4',
        favorite_count: '3',
        comments_count: '6',
      },
    },
    {
      id: 3,
      text: 'Mais uma nessa trip incrível',
      user_id: 3,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post3.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-12T00:11:33.205+00:00',
      updated_at: '2024-10-12T01:31:33.230+00:00',
      user: {
        id: 3,
        first_name: 'Ana',
        last_name: 'Oliveira',
        username: 'aninha23',
        email: 'oliveiraana23@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/7-ana.png',
        is_online: false,
        full_name: 'Ana Oliveira',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [],
      status: 'published',
      meta: {
        like_count: '5',
        favorite_count: '2',
        comments_count: '4',
      },
    },
    {
      id: 6,
      text: 'Pensando seriamente em morar aqui',
      user_id: 6,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post6.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-11T22:31:33.206+00:00',
      updated_at: '2024-10-12T01:31:33.234+00:00',
      user: {
        id: 6,
        first_name: 'Samuel',
        last_name: 'Vilar',
        username: 'samuelvilar',
        email: 'samu.vilar@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/5-samuel.png',
        is_online: false,
        full_name: 'Samuel Vilar',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'like',
          post_id: 6,
        },
      ],
      status: 'published',
      meta: {
        like_count: '8',
        favorite_count: '2',
        comments_count: '3',
      },
    },
    {
      id: 4,
      text: 'Flinders station - Melbourne',
      user_id: 4,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post4.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-11T22:01:33.206+00:00',
      updated_at: '2024-10-12T01:31:33.232+00:00',
      user: {
        id: 4,
        first_name: 'Marcelo',
        last_name: 'Tavares',
        username: 'celotavares',
        email: 'celotavares@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png',
        is_online: false,
        full_name: 'Marcelo Tavares',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [],
      status: 'published',
      meta: {
        like_count: '5',
        favorite_count: '2',
        comments_count: '4',
      },
    },
    {
      id: 7,
      text: 'A cidade grande tem seu charme',
      user_id: 7,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post7.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-11T21:31:33.206+00:00',
      updated_at: '2024-10-12T01:31:33.235+00:00',
      user: {
        id: 7,
        first_name: 'Mateus',
        last_name: 'de Souza',
        username: 'mateussouza',
        email: 'msouza@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
        is_online: false,
        full_name: 'Mateus de Souza',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'like',
          post_id: 7,
        },
      ],
      status: 'published',
      meta: {
        like_count: '6',
        favorite_count: '4',
        comments_count: '2',
      },
    },
    {
      id: 8,
      text: 'Final de campeonato, vamos pra cima 🚀',
      user_id: 8,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post8.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-11T17:31:33.206+00:00',
      updated_at: '2024-10-12T01:31:33.237+00:00',
      user: {
        id: 8,
        first_name: 'Gabriel',
        last_name: 'Lemos',
        username: 'glemos',
        email: 'glemos@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/3-gabriel.png',
        is_online: false,
        full_name: 'Gabriel Lemos',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'like',
          post_id: 8,
        },
      ],
      status: 'published',
      meta: {
        like_count: '7',
        favorite_count: '1',
        comments_count: '2',
      },
    },
    {
      id: 9,
      text: 'Noite de cinema com a família',
      user_id: 9,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post9.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-11T15:31:33.209+00:00',
      updated_at: '2024-10-12T01:31:33.238+00:00',
      user: {
        id: 9,
        first_name: 'Carla',
        last_name: 'Santos',
        username: 'carlasantos',
        email: 'carlasantos@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/2-carla.png',
        is_online: false,
        full_name: 'Carla Santos',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'like',
          post_id: 9,
        },
      ],
      status: 'published',
      meta: {
        like_count: '8',
        favorite_count: '1',
        comments_count: '6',
      },
    },
    {
      id: 10,
      text: 'Time to fly!',
      user_id: 2,
      image_url:
        'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post10.jpg',
      is_fixed: false,
      is_activated: true,
      created_at: '2024-10-11T10:31:33.209+00:00',
      updated_at: '2024-10-12T01:31:33.239+00:00',
      user: {
        id: 2,
        first_name: 'Tamires',
        last_name: 'Silva',
        username: 'tami_silva',
        email: 'tsilva@coffstack.com',
        profile_url:
          'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/4-tamires.png',
        is_online: false,
        full_name: 'Tamires Silva',
        meta: {
          following_count: '0',
          followers_count: '0',
        },
      },
      reactions: [
        {
          emoji_type: 'like',
          post_id: 10,
        },
      ],
      status: 'published',
      meta: {
        like_count: '6',
        favorite_count: '3',
        comments_count: '5',
      },
    },
  ],
};
