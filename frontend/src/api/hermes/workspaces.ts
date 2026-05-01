import { request } from '../client'

export interface WorkspacePreset {
  id: string
  name: string
  path: string
}

export async function fetchWorkspaces(): Promise<WorkspacePreset[]> {
  const res = await request<{ workspaces: WorkspacePreset[] }>('/api/hermes/workspaces')
  return res.workspaces
}

export async function createWorkspace(name: string, path: string): Promise<WorkspacePreset> {
  const res = await request<{ workspace: WorkspacePreset }>('/api/hermes/workspaces', {
    method: 'POST',
    body: JSON.stringify({ name, path }),
  })
  return res.workspace
}

export async function updateWorkspace(id: string, data: { name?: string; path?: string }): Promise<WorkspacePreset> {
  const res = await request<{ workspace: WorkspacePreset }>(`/api/hermes/workspaces/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
  return res.workspace
}

export async function deleteWorkspace(id: string): Promise<boolean> {
  try {
    await request(`/api/hermes/workspaces/${id}`, { method: 'DELETE' })
    return true
  } catch {
    return false
  }
}
