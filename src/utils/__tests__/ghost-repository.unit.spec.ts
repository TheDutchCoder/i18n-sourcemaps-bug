import type { $Fetch, NitroFetchRequest } from 'nitropack'
import { describe, expect, it, vi } from 'vitest'
import { ghostRepository } from '~/utils/ghost-repository'

describe('ghostRepository', () => {
  it('should be a function', () => {
    expect(ghostRepository).toBeInstanceOf(Function)
  })

  it('should return the correct methods', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    expect(ghost.getPage).toBeInstanceOf(Function)
    expect(ghost.getPosts).toBeInstanceOf(Function)
    expect(ghost.getPost).toBeInstanceOf(Function)
    expect(ghost.getPostsByAuthor).toBeInstanceOf(Function)
    expect(ghost.getPostsByTag).toBeInstanceOf(Function)
    expect(ghost.getPostsForBlog).toBeInstanceOf(Function)
    expect(ghost.getTags).toBeInstanceOf(Function)
  })

  it('should call getPage with the corretc params', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    ghost.getPage('test')

    expect(fetch).toHaveBeenCalledWith('/pages/test/', {
      params: {
        limit: 1,
      },
    })
  })

  it('should call getPosts with the correct params', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    ghost.getPosts('test')

    expect(fetch).toHaveBeenCalledWith('/posts/slug/test', {
      params: {
        include: 'tags,authors',
      },
    })
  })

  it('should call getPost with the correct params', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    ghost.getPost('test')

    expect(fetch).toHaveBeenCalledWith('/posts/slug/test', {
      params: {
        include: 'tags,authors',
        limit: 1,
      },
    })
  })

  it('should call getPostsByAuthor with the correct params', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    ghost.getPostsByAuthor(computed(() => ({ filter: 'test', pageNumber: 1 })))

    expect(fetch).toHaveBeenCalledWith('/posts/', {
      params: {
        include: 'tags,authors',
        filter: 'test',
        page: 1,
        limit: 12,
      },
    })
  })

  it('should call getPostsByTag with the correct params', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    ghost.getPostsByTag('test')

    expect(fetch).toHaveBeenCalledWith('/posts/', {
      params: {
        include: 'tags,authors',
        filter: 'tag:test',
      },
    })
  })

  it('should call getPostsForBlog with the correct params', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    ghost.getPostsForBlog(computed(() => ({ filter: 'test', pageNumber: 1, limit: 10 })))

    expect(fetch).toHaveBeenCalledWith('/posts/', {
      params: {
        include: 'tags,authors',
        filter: 'test',
        page: 1,
        limit: 10,
      },
    })
  })

  it('should call getTags with the correct params', () => {
    const fetch = vi.fn()
    const ghost = ghostRepository(fetch as unknown as $Fetch<unknown, NitroFetchRequest>)

    ghost.getTags()

    expect(fetch).toHaveBeenCalledWith('/tags/', {
      params: {
        include: 'count.posts',
        limit: 'all',
        filter: 'visibility:public',
      },
    })
  })
})
